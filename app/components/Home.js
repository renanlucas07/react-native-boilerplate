import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    wathers: []
  }

  componentDidMount() {
    this._handleGetWathers();
  }

  _handleGetWathers = async () => {
    const data = [{id: 1, name: `agua`, pricing: `12`, description: `agua da boa`}];
    this.setState({ wathers: data });
  }

  render() {
    return (
      <List wathers={this.state.wathers} />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.email,
  name: user.name
});

export default connect(mapStateToProps)(Home);
