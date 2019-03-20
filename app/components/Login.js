import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  ToastAndroid,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { login } from '../store/actions/user';
import { loginStyle } from '../assets/styles';

class Login extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    loading: false
  }

  _login = async () => {
    this.setState({ loading: true })
    const response = {
      ok: true,
      data: {
        token: 'token'
      }
    }
    if (response.ok) {
      let { token } = response.data;
      try {
        await AsyncStorage.setItem('token', token);
        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Home')
        console.log(`Logado com sucesso.`);
      } catch (error) {
        console.log('Ocorreu um erro ao logar.');
        this.setState({ loading: false })
      }
    } else {
      console.log(
        'Suas credenciais estão incorretas.'
      );
      this.setState({ loading: false })
    }
  }

  render() {
    return (
      <View style={loginStyle.container}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          inputStyle={loginStyle.input}
          containerStyle={loginStyle.inputContainer}
        />
        <Input
          placeholder="Senha"
          secureTextEntry value={this.state.password}
          onChangeText={password => this.setState({ password })}
          inputStyle={loginStyle.input}
          containerStyle={loginStyle.inputContainer}
        />
        <Button
          title="Logar" containerStyle={loginStyle.button}
          onPress={this._login}
          disabled={this.state.loading}
          loading={this.state.loading}
        />

        <Button
          title="Registrar" containerStyle={loginStyle.button}
          onPress={() => { this.props.navigation.navigate('Register') }}
          disabled={this.state.loading}
          type="clear"
        />
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(Login));
