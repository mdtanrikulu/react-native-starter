import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { Card, Button} from "react-native-elements";

import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

let styles

/*<TouchableHighlight style={button} onPress={() => actions.fetchData()}>
  <Text style={buttonText}>Load Data</Text>
</TouchableHighlight>*/

const HomeScreen = ({appData, actions}) => {

	const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  return (
		<View style={container}>
	      <Text style={text}>Redux Examples</Text>
        <Button
          backgroundColor="#0b7eff"
          title="SEND YELL"
          onPress={() => actions.sendData({ 
            "tweetText": "Hello WarsawJS !!!",  
            "author": "5a349ce460c6090004150d4c",
            "like_counter": 0, 
            "comment_counter": 0
            })}
        />
	      
	      <View style={mainContent}>
	      {
	        appData.isFetching && <Text>Loading</Text>
	      }
	      {
	        appData.data.length ? (
	          appData.data.map((yell, i) => {
	            return <View key={i} >
	              <Text>Id: {yell._id}</Text>
                <Text>Tweet: {yell.tweet_text}</Text>
                <Text>Author: {yell.author}</Text>
                <Text>Like: {yell.like_counter}</Text>
                <Text>Comment: {yell.comment_counter}</Text>
                <Text>Created at: {yell.createdAt}</Text>
	            </View>
	          })
	        ) : null
	      }
	      </View>
	    </View>
	)
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

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
)(HomeScreen)