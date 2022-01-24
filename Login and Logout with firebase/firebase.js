// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2e2cTWg1MPwWtFwkhk-a722wtM2zyc-I",
    authDomain: "userinfo-534b1.firebaseapp.com",
    projectId: "userinfo-534b1",
    storageBucket: "userinfo-534b1.appspot.com",
    messagingSenderId: "701991546765",
    appId: "1:701991546765:web:de7c6fdf5c694c0de997c4",
    measurementId: "G-C8X9BCL280"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();