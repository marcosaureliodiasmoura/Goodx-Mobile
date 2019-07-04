import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProjectDetails,
  Details,
  Background,
  BackButton,
  Cover,
  ProjectTitle,
  DonateButton,
  DonateButtonText,
  Episode,
  Author,
  Title,
} from './styles';

export default class Podcast extends Component {
  handleBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const project = navigation.getParam('project');

    return (
      <Container>
        <ProjectDetails
          ListHeaderComponent={() => (
            <Details>
              <Background
                source={{
                  uri:
                    'http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/sol.jpg?itok=idpCkSTN',
                }}
                blurRadius={5}
              />
              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#FFF" />
              </BackButton>
              <Cover
                source={{
                  uri:
                    'http://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/sol.jpg?itok=idpCkSTN',
                }}
              />

              <ProjectTitle>{project.title}</ProjectTitle>
              <DonateButton onPress={() => {}}>
                <DonateButtonText>DOAR</DonateButtonText>
              </DonateButton>
              <Details>
                <Title>Meta: R${project.amountcollected},00</Title>
                <Title>Description:{project.description}</Title>
                <Title>Author Project: Albert Wesker</Title>
                <Title>City: Brazil, PE</Title>
              </Details>
            </Details>
          )}
        />
      </Container>
    );
  }
}
