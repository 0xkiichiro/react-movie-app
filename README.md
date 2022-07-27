# Movie App

A movie app search site. You can register via firebase auth. Login using the registered acc. or login via Google. If you login you can see the rates of each movie, use the search bar and click on movie pictures will take you to a details page with more details regarding the movies. I added react toastify to manage login/logout pop ups.

## Project Skeleton

```
005 - Movie App (folder)
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```
Project Layout:

![Project 005 Snapshot](movie-app_structure.png)

# Technologies used

HTML, CSS, JS, ReactJS, Axios, Bootstrap, Firebase, React Router, React Toastify

Axios Link: https://axios-http.com/docs/intro

Bootstrap Link: https://react-bootstrap.github.io/

Firebase Link: https://firebase.google.com/?gclsrc=ds&gclid=CLmp7cOymfkCFa5IHQkdjEUAEA&gclsrc=ds

React Router Link: https://reactrouter.com/

React Toastify Link:https://www.npmjs.com/package/react-toastify

![Project 005 Snapshot](movie-app.gif)

## Steps to Solution

- Step 1 : Create React App using `npx create-react-app movie-app`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.

![Project 005 Snapshot](firebase-create-app.gif)

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.
  - Add the Firebase Authentication JS codes in your `firebase.js` file and initialize Firebase Authentication:

```jsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

- Use this method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Use this method to `Authenticate Using Google with Popup` :

```jsx
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
```

- Use this method to `Sign Out` :

```jsx
import { getAuth, signOut } from 'firebase/auth';

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

- Step 4 : Signup `https://www.themoviedb.org/documentation/api` and get API key for getting data from `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, for searching movies `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and for movie details `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`.

- Step 5: You can use css frameworks like Bootstrap, Semantic UI, Material UI.

- Step 6: Add project gif to your project and README.md file.

## Comments

All comments appreaciated. You can contact me:

email: 0xkiichiro@proton.me
twitter: @0xkiichiro

## License

[MIT](https://choosealicense.com/licenses/mit/)

