import React, { Component } from 'react'
import { StyleSheet, ToastAndroid, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

class NewWather extends Component {

  state = {
    name: "Água de 2.9",
    description: "Mais uma água",
    pricing : 2.89,
    stock: 0,
    loading: false
  }

  _handleSubmit = async () => {
    this.setState({ loading: true })

    let wather = this.state
    delete wather.loading
    wather.pricing = (Math.random() * 10).toFixed(2)
    wather.stock = Math.floor(Math.random() * 10)

    const response = {
      ok: true
    }

    if (response.ok) {
      ToastAndroid.showWithGravityAndOffset(
        `Água ${wather.name} cadastrada com sucesso.`,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50,
      );
      this.props.navigation.goBack();
    }else {
      ToastAndroid.showWithGravityAndOffset(
        `Não foi possível cadastrar a água`,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50,
      );
    }

    this.setState({ loading: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Nome"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Descrição"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Button
          title="Cadastrar" containerStyle={styles.button}
          onPress={this._handleSubmit}
          disabled={this.state.loading}
          loading={this.state.loading}
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
    paddingTop: 10
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

export default withNavigation(NewWather);
