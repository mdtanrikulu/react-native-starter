import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
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
  let yellViewHeight = { height: appData.yellViewHeight};

  return (
		<View style={container}>
      <TextInput
        style={styles.yellInput}
        multiline = {true}
        numberOfLines = {4}

      />
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
          <ScrollView>
	      {
	        appData.isFetching && <Text>Loading</Text>
	      }
	      {
          appData.data.length ? (
	          appData.data.map((yell, i) => {
	            return <View style={[styles.yellView, yellViewHeight]} key={i} >
                <TouchableHighlight style={styles.yellText} onPress={() => (appData.yellViewHeight > 85 ?  actions.changeHeight(80) : actions.changeHeight(380)) }>
	              <Text style={styles.yellTextStyle}>{person.tweetText}</Text>
                </TouchableHighlight>
                <View style={styles.yellFooter}>
                  <TouchableHighlight onPress={() => alert("like")}>
                    <Image
                      style={styles.likeIcon}
                      source={require('../img/likeicon.png')}
                    />
                  </TouchableHighlight>
	              <Text style={styles.yellLike}>{yell.like_counter}</Text>
                  <TouchableHighlight onPress={() => alert("comment")}>
                    <Image
                      style={styles.commentIcon}
                      source={require('../img/commenticon.png')}
                    />
                  </TouchableHighlight>
                <Text style={styles.yellComment}>{yell.comment_counter}</Text>
                </View>
	            </View>
	          })
	        ) : null
	      }
          </ScrollView>
	      </View>
	    </View>
	)
}

styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  yellInput: {
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
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
    height: 420,
  },
  yellView: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  yellText: {
    padding: 5,
    height:45,
  },
  yellTextStyle: {
    fontFamily: 'Cochin',
  },
  yellFooter: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    height: 20,
    flexDirection: 'row',
  },
  yellLike: {
    flex: 1,
    fontFamily: 'Cochin',
  },
  yellComment: {
    flex: 1,
    fontFamily: 'Cochin',
  },
  likeIcon: {
    marginTop: -5,
    marginLeft: 40,
    width: 30,
    height: 30,
  },
  commentIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
    marginLeft: 30,
  },

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