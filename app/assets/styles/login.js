import { StyleSheet, Dimensions, Platform } from 'react-native';

const login = StyleSheet.create({
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
});

export default login;