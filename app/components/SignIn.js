import React from "react";
import { View} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import { connect } from 'react-redux'
import { onSignIn } from '../api/auth'

const SignInScreen = ({navigation}) => {
  let nameInput, passInput
  return (
  <View style={{ paddingVertical: 20 }}>
    <Card>
        <FormLabel>Nickname</FormLabel>
        <FormInput ref={ el => nameInput = el } placeholder="Nickname..." />
        <FormLabel>Password</FormLabel>
        <FormInput ref={ el => passInput = el } secureTextEntry placeholder="Password..." />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="SIGN IN"
          onPress={(e) => {
            onSignIn({
              nickname: nameInput.value,
              password: passInput.value
            }).then((data) => {
                navigation.navigate("SignedIn")
            });
          }}
        />
    </Card>
  </View>
)}


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
