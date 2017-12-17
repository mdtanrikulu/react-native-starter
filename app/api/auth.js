import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";
export const URL = "https://yell-server-side.herokuapp.com/user"

export const onSignUp = (cridentials) => new Promise((resolve, reject) => {
    fetch(URL, {  
        method: 'PUT',
        body: JSON.stringify(cridentials)
    })
    .then(function (data) {   
        alert(JSON.stringify(data));
        AsyncStorage.setItem(USER_KEY, "true")
        resolve(true);
    })  
    .catch(function (error) {
      alert(error);
    });
})

export const onSignIn = (cridentials) => new Promise((resolve, reject) => {
    fetch(URL, {  
        method: 'POST',
        body: JSON.stringify(cridentials)
    })
    .then(function (data) {   
        alert(JSON.stringify(data));
        AsyncStorage.setItem(USER_KEY, "true")
        resolve(true);
    })  
    .catch(function (error) {
      alert(error);
    });
})

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
          if (res !== null) {
            return resolve(true);
          } else {
            return resolve(false);
          }
      })
      .catch(err => reject(err));
  });
};
