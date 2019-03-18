import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements'
import Home from '../components/Home'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lista',
      headerRight: (
        <Button
          onPress={() => {}}
          type="clear"
          icon={
            <Icon
              type="font-awesome"
              name="plus"
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