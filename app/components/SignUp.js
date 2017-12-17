import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import { connect } from 'react-redux'
import { onSignUp } from '../api/auth'

const SignUpScreen = ({navigation}) => {
  let nickname, password, repassword
  return (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Nickname</FormLabel>
      <FormInput ref={ el => nickname = el } placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput ref={ el => password = el } secureTextEntry placeholder="Confirm Password..." />
      <FormLabel>Re-enter Password</FormLabel>
      <FormInput ref={ el => repassword = el } secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignUp({
            nickname: nickname.value,
            password: password.value,
            repassword: repassword.value
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
