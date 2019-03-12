import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Register extends Component {

  state = {
    email: '',
    password: ''
  }

  _register = () => {
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoFocus keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Senha"
          secureTextEntry value={this.state.password}
          onChangeText={password => this.setState({ password })}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />

        <Button
          title="Registrar" containerStyle={styles.button}
          onPress={this._register}
        />

        <Button
          title="Logar" containerStyle={styles.button} type="clear"
          onPress={() => { this.props.navigation.goBack() }}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#78c8ed',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingLeft: 15,
  },
  inputContainer: {
    paddingBottom: 10,
  }
})

export default withNavigation(Register);