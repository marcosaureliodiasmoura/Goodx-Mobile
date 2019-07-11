import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../config/ReactotronConfig';
import '../../config/DevToolsConfig';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import styles from './styles';

import api from '../../services/api';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    // Trabalharemos com o Saga aqui
    // seState é pra fazer alteração
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>Entrar</Text>

          <Text style={styles.label}>E-MAIL</Text>
          <TextInput
            value={email}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <Text style={styles.label}>SENHA</Text>
          <TextInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={(el) => {
              this.passwordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />

          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);

// state = {
//   loggedInUser: null,
//   errorMessage: null,
// };

// signIn = async () => {
//   try {
//     const response = await api.post('/sessions', {
//       email: 'elven@2.com',
//       password: '123456',
//     });

//     const { user, token } = response.data;
//     console.tron.log(response.data);

//     await AsyncStorage.multiSet([
//       // Grava várias informações no AsyncStorage
//       ['@CodeApi:token', token],
//       ['@CodeApi:user', JSON.stringify(user)],
//       // Ele vai me retornar o usuário em forma de objeto que tem id,
//       // nome e etc... pra isso preciso converte-lo em formato de string.
//     ]);

//     this.setState({ loggedInUser: user });
//   } catch (response) {
//     this.setState({ errorMessage: response.data.error });
//     // Se acontecer algum erro, quero salvar a informação do erro e
//     // mostrar na tela, que será no estado do meu componente.
//     // Ou seja um middleware da resposta da nossa api
//     // Estou retornando o meu error como uma string dentro de uma variavel error ({})
//   }
// };

// render() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Button onPress={this.signIn} title="Entrar" />
//       </View>
//     </View>
//   );

// export default SignIn;
