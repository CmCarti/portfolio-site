import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA9LeKpOK7qXNqXZa7i6LTwmzLNB25FfE8",
    authDomain: "portfolio-site-5f4f0.firebaseapp.com",
    databaseURL: "https://portfolio-site-5f4f0.firebaseio.com",
    projectId: "portfolio-site-5f4f0",
    storageBucket: "portfolio-site-5f4f0.appspot.com",
    messagingSenderId: "701462461557"
  };
const fire = firebase.initializeApp(config);
export default fire;