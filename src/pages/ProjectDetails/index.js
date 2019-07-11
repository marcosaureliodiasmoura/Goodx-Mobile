import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Creators as ProjectsDetailsActions } from '../../store/ducks/projectsDetails';

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
  Title,
} from './styles';

class Podcast extends Component {
  componentDidMount() {
    this.loadProjectsDetails();
  }

  loadProjectsDetails = () => {
    const { id } = this.props.navigation.state.params.project;
    // console.tron.log(id);

    this.props.getProjectsDetailsRequest(id);

    // console.tron.log(this.props.getProjectsDetailsRequest);

    // console.tron.log(this.props.navigation.state.params.project.title);
  };

  handleBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  //Executa de imediato
  // handleDonatePress = (project) => {
  //   const { navigation } = this.props;

  //   navigation.navigate('DonateGo', { project });
  // };

  render() {
    const { navigation } = this.props;
    // const project = navigation.getParam('project'); //Caso queira pegar pelo parametro
    const project = this.props.projectsDetails.data; // Pegando pelo GetSuccess de Details
    // console.tron.log(this.props.projectsDetails); // Consigo ver o antes (não carregado ainda) e o depois (recebido)

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

              <DonateButton onPress={() => navigation.navigate('DonateGo', { project })}>
                {/* <DonateButton onPress={this.handleDonatePress(project)}> */}
                <DonateButtonText>DOAR</DonateButtonText>
              </DonateButton>
              <Details>
                <Title>Meta: R${project.amountcollected},00</Title>
                <Title>Description:{project.description}</Title>
                <Title>Author Project: Albert Wesker</Title>
                <Title>City: Brazil, PE</Title>
                {!!project.donations && <Title> {project.donations.length} doações.</Title>}
                {!!project.user && (
                  <Title>
                    {project.user.name}

                    {project.user.surname}

                    <Title>E-mail:</Title>

                    <Title>{project.user.email}</Title>
                  </Title>
                )}
              </Details>
            </Details>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projectsDetails: state.projectsDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Podcast);
