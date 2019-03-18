import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this._handleGetItems();
  }

  _handleGetItems = async () => {
    const data = [{id: 1, name: `agua`, pricing: `12`, description: `agua`}];
    this.setState({ items: data });
  }

  render() {
    return (
      <List items={this.state.items} />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.email,
  name: user.name
});

export default connect(mapStateToProps)(Home);
