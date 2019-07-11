import React, { Component } from 'react';
import { Text, TextInput, AsyncStorage } from 'react-native';
import api from '../../services/api';
import {
  Container, DonateButton, DonateButtonText, Content,
} from './styles';

export default class Donate extends Component {
  state = {
    amountdonate: '',
  };

  handlePay = async () => {
    const { amountdonate } = this.state;
    console.tron.log(amountdonate);

    const { navigation } = this.props;

    const project = navigation.getParam('project');

    const { id } = project;
    console.tron.log(id);

    if (!amountdonate) {
      console.tron.log('Informe o valor corretamente');
    } else {
      try {
        await api.post(`/projects/${project.id}/donations`, {
          amountdonate,
          id,
        });
        console.tron.log('Doação Efetuada com sucesso');
      } catch (err) {
        console.tron.log(err);
      }
    }
  };

  render() {
    const { navigation } = this.props;
    // console.tron.log(navigation);

    const project = navigation.getParam('project');

    // console.tron.log(project);
    const { amountdonate } = this.state;

    return (
      <Container>
        <Text>Id do projeto: {project.id}</Text>
        <Text>Nome do Projeto: {project.title}</Text>
        <Text>VALOR:</Text>
        <Content>
          <TextInput
            value={amountdonate}
            onChangeText={text => this.setState({ amountdonate: text })}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Informe a quantia para doação"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
          />
        </Content>
        <Content>
          <DonateButton onPress={this.handlePay}>
            <DonateButtonText>CONFIRM</DonateButtonText>
          </DonateButton>
        </Content>
      </Container>
    );
  }
}

{
  /* <DonateButton value={1}
          onPress={this.handlePay}>
            <DonateButtonText>R$1,00</DonateButtonText>
          </DonateButton>
          <DonateButton value={3}>
            <DonateButtonText>R$3,00</DonateButtonText>
          </DonateButton>
          <DonateButton>
            <DonateButtonText>R$5,00</DonateButtonText>
          </DonateButton>
        </Content>
        <Content>
          <DonateButton>
            <DonateButtonText>R$15,00</DonateButtonText>
          </DonateButton>
          <DonateButton>
            <DonateButtonText>R$30,00</DonateButtonText>
          </DonateButton>
          <DonateButton>
            <DonateButtonText>R$50,00</DonateButtonText>
          </DonateButton>
        </Content>
        <Content>
          <DonateButton>
            <DonateButtonText>R$100,00</DonateButtonText>
          </DonateButton>
          <DonateButton>
            <DonateButtonText>R$500,00</DonateButtonText>
          </DonateButton>
          <DonateButton>
            <DonateButtonText>+</DonateButtonText>
          </DonateButton> */
}
