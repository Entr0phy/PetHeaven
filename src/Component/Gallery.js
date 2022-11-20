import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Gallery.css";
const Gallery = (props) => {
  const url = "https://settledrail.backendless.app/api/data/Pet";
  const [data, setData] = useState({ trans: [], loading: true, error: null });
  let navigate = useNavigate();

  //function to make api call to fetch data from database
  async function sendRequest() {
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.text(); // Or `.json()` or one of the others
      })
      .then((data) => {
        const dataType = JSON.parse(data);
        setData({
          trans: dataType,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let count = 0;
  //function to redirect users to either the adoption page or log in page
  const redirect = () => {
    props.checkState ? navigate(`/Profile`) : navigate(`/LogIn`);
  };

  //calling the useEffect hook to initialise the send request to display the list of pets
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className="galleryContainer">
      <h1>Gallery</h1>
      <div className="petContainer">
        {data.loading === true ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : (
          data.trans.map((pet) => (
            <div className="petElements" key={pet.objectId}>
              <div className="petImageContainer">
                <img src={pet.url} />
              </div>
              <h1>{pet.Name}</h1>
              <h4>{pet.Breed}</h4>
              <div className="petDesc">
                <p>UID&nbsp;{pet.UID} |&nbsp;</p>
                <p>Age &nbsp;{pet.Age}</p>
              </div>
              <div className="adoptBtn">
                <button onClick={redirect}>Adopt Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
