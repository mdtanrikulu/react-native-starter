import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";
export const URL = "https://yell-server-side.herokuapp.com/user"

export const onSignUp = (cridentials) => new Promise((resolve, reject) => {
    fetch(URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },  
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
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(cridentials)
    })
    .then(function (data) {   
      if(data && data.status == 200){
        const body = JSON.parse(data._bodyInit)
        console.log("data", body._id);
        AsyncStorage.setItem(USER_KEY, body._id)
        resolve(true);
      } else {
        alert(data.status);
      }
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
          console.log("res", res);
          if (res !== null) {
            return resolve(res);
          } else {
            return resolve(false);
          }
      })
      .catch(err => reject(err));
  });
};
