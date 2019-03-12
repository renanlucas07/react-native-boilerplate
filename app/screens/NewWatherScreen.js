import React from 'react';
import NewWather from '../components/NewWather'

class NewWatherScreen extends React.Component {
  static navigationOptions = {
    title: 'Nova Água',
  };

  render() {
    return (
      <NewWather />
    )
  }
}

export default NewWatherScreen;