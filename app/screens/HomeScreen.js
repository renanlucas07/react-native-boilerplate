import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import Home from '../components/Home'
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { 
      title: 'Lista de Águas',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('NewWather')}
          type="clear"
          icon={
            <Icon
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