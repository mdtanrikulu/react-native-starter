import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text } from "react-native-elements";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onSignOut } from '../api/auth'
import * as Actions from '../actions'


const ProfileScreen = ({navigation}) => {
  return (
		<View style={{ paddingVertical: 20 }}>
      <Card title="John Doe">
        <View
          style={{
            backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 40,
            alignSelf: "center",
            marginBottom: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
        </View>
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
        />
      </Card>
  </View>
	)
}


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)