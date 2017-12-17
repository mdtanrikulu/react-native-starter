import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import { connect } from 'react-redux'
import { onSignUp } from '../api/auth'

const SignUpScreen = ({navigation}) => {
  let nameInput, passInput, repassInput
  return (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Nickname</FormLabel>
      <FormInput textInputRef={ el => nameInput = el } placeholder="Nickname..." />
      <FormLabel>Password</FormLabel>
      <FormInput textInputRef={ el => passInput = el } secureTextEntry placeholder="Password..." />
      <FormLabel>Re-enter Password</FormLabel>
      <FormInput textInputRef={ el => repassInput = el } secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          if(passInput._lastNativeText === repassInput._lastNativeText)
            onSignUp({
              nickname: nameInput._lastNativeText,
              password: passInput._lastNativeText
            }).then(() => navigation.navigate("SignedIn"));
        }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Card>
  </View>
)};

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSignIn: () => dispatch(onSignIn())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)
