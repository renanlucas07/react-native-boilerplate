import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import Home from '../components/Home'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lista',
      headerRight: (
        <Button
          onPress={() => {
            AsyncStorage.removeItem('token');
            navigation.navigate('AuthLoading');
          }}
          type="clear"
          icon={
            <Icon
              type="font-awesome"
              name="sign-out"
              size={20}
              color="blue"
            />
          }
        />
      ),
    }
  };

  render() {
    return (
      <Home />
    )
  }
}



export default HomeScreen;