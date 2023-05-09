
const firebaseConfig = {
    apiKey: "AIzaSyDJN5xrQKFL6ilECi1zm7hgmt644SXz34g",
    authDomain: "cruise-ship-management-d4e51.firebaseapp.com",
    databaseURL: "https://cruise-ship-management-d4e51-default-rtdb.firebaseio.com",
    projectId: "cruise-ship-management-d4e51",
    storageBucket: "cruise-ship-management-d4e51.appspot.com",
    messagingSenderId: "885051482488",
    appId: "1:885051482488:web:a389146c00d27e24af688d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })