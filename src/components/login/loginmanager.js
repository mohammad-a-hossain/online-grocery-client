import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.Config";

//export const initializLoginFrameWork = () => {
/*   if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};
 */
firebase.initializeApp(firebaseConfig);
/* ---------google singIn------------------ */

export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const singnInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return singnInUser;
      //console.log(displayName,email,photoURL)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
};

/* ------------------Facebook login------------------ */

// export const faceBookLogin = () => {
//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(fbProvider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // The signed-in user info.
//       var user = result.user;
//       user.success = true;
//       console.log(user)
//       return user;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//          return errorMessage
//       // ...
//     });
// };

/* -------create user name and password---------------- */
// export const createUserWithEmailAndPassword = (name, email, password) => {
//   return firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       const newUserInfo = res.user;
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       upDateUserName(name);
//       return newUserInfo;
//     })
//     .catch((error) => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       console.log(newUserInfo)
//       return newUserInfo;
//     });
// };
// ---- sign in------------user---------------
// export const signInWithEmailAndPassword = (email, password) => {
//   return firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log(res)
//       const newUserInfo = res.user;
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       return newUserInfo;
//     })
//     .catch((error) => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       console.log(newUserInfo)
//       return newUserInfo;
//     });
// };

// const upDateUserName = (name) => {
//   const user = firebase.auth().currentUser;

//   user
//     .updateProfile({
//       displayName: name,
//     })
//     .then(function () {
//       console.log("name updated");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
