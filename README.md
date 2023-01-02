# Pet Heaven

Pet Heaven is being hosted live on [Firebase](https://petheaven-9b1c4.web.app) 

**This is a mock pet adoption website that i made as one of my school projects.** 

## Pointers to note
- This is a mock pet adoption website so it is not functional at all
- User management is not secured at all so please avoid inputting sensetive information as username or password
- Subscribe to newsletter is just a dummy submit button, was configuring around emailjs but did not manage to get it to work, will fix it when i have the time
- Try not to refresh the page when logged in, refreshing it will cause user to be logged out. Tried using local storage as a mean to store the state but it ended up causing my user verification check to fail 
- List of pet up for adoption is retreived from Backendless using REST API 

## Techstack and libraries used
- React.JS
- Axios (handle POST request)
- React-icons 
- Backendless (To communicate with Backendless database)
- React Routing (For SPA)
- Backendless for database (Handle user authentication) 
- Firebase realtime database (Store details about the pets available for adoption)

**Do reach out to me and let me know should you know of improvements, i am still an undergraduate so still trying to take in and learn as much as i can.**
