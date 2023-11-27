
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBynfyvjRxnNvM1t2LtwqGMVL9mHzePg_0",
    authDomain: "capstone-f596a.firebaseapp.com",
    databaseURL: "https://capstone-f596a-default-rtdb.firebaseio.com",
    projectId: "capstone-f596a",
    storageBucket: "capstone-f596a.appspot.com",
    messagingSenderId: "346053120792",
    appId: "1:346053120792:web:6ff7fbb2e63f7ecb4c846d",
    measurementId: "G-FHSZZTCKQ2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  

  register.addEventListener("click", function(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        alert("user created!"+ user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  });

