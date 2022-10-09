let firebaseConfig = {
    apiKey: "AIzaSyBtJBjvIYDi6Urjjz_f8Bp1W78D9Z6Wrhg",

    authDomain: "blogging-website-531b2.firebaseapp.com",

    projectId: "blogging-website-531b2",

    storageBucket: "blogging-website-531b2.appspot.com",

    messagingSenderId: "717551565499",

    appId: "1:717551565499:web:6a3f22484171e2cf5ec79e"


};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();