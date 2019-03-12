import React, { Component } from 'react'
import {
  AsyncStorage,
  StyleSheet,
  ToastAndroid,
  View
} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

class Login extends Component {

  state = {
    name: 'Allef Gomes',
    email: 'allef@rubert.com.br',
    password: '12341234',
    loading: false
  }

  _login = async () => {
    this.setState({ loading: true })
    const response = {
      ok: true,
      data: {
        token: 'creu'
      }
    }
    if (response.ok) {
      console.log('oii')
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
          title="Logar" containerStyle={styles.button}
          onPress={this._login}
          disabled={this.state.loading}
          loading={this.state.loading}
        />

        <Button
          title="Registrar" containerStyle={styles.button}
          onPress={() => { this.props.navigation.navigate('Register') }}
          disabled={this.state.loading}
          type="clear"
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

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(Login));