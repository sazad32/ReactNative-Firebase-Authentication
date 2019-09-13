import React from 'react'
import { StyleSheet, Platform, Image, Text, Button, View } from 'react-native'
import firebase from 'firebase';

export default class Home extends React.Component {
  state = { currentUser: null }
  handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}


render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}><Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="LogOut" color="#e93766" onPress={this.handleLogOut}/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
