import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBJ-rFYD8DCoB_Wtp8YHUAizsbHuJ7BQR0",
    authDomain: "rajesh-sir-temp.firebaseapp.com",
    databaseURL: "https://rajesh-sir-temp-default-rtdb.firebaseio.com",
    projectId: "rajesh-sir-temp",
    storageBucket: "rajesh-sir-temp.appspot.com",
    messagingSenderId: "1091244030154",
    appId: "1:1091244030154:web:2b8c375a9416ef3ac5dc33"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default auth;

