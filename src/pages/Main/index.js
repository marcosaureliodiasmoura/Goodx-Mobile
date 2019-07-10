import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import {
  View, TouchableOpacity, Text, AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectsActions from '../../store/ducks/projects';

import styles, {
  ProjectList, Project, Cover, Info, Title, Count,
} from './styles';

import Menu from '../Menu';

// console.tron.log('Testando');
class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    // console.tron.log(this.props);

    loadRequest();
    // AsyncStorage.clear();
  }

  state = {
    leftOpen: false,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('SignIn');
  };

  toggleMenu = (position, isOpen) => {
    this.setState({ [`${position}Open`]: isOpen });
  };

  handleProjectPress = (project) => {
    const { navigation } = this.props;

    navigation.navigate('ProjectDetails', { project });
  };

  render() {
    const { projects } = this.props;
    // console.tron.log(this.props); //Consigo ver os dados antes (array vazio) e o depois (array cheio)

    const { leftOpen } = this.state;

    return (
      <View style={styles.backgroundWrapper}>
        <SideMenu
          isOpen={leftOpen}
          disableGestures
          onChange={isOpen => this.toggleMenu('left', isOpen)}
          openMenuOffset={300}
          menu={<Menu />}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={{
                  top: 5,
                  bottom: 5,
                  left: 10,
                  right: 10,
                }}
                onPress={() => this.toggleMenu('left', true)}
              >
                <Icon name="menu" size={24} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.teamTitle}>Goodx</Text>
              <TouchableOpacity
                hitSlop={{
                  top: 5,
                  bottom: 5,
                  left: 10,
                  right: 10,
                }}
                onPress={this.signOut}
              >
                <Icon name="account-circle" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <ProjectList
                // ListHeaderComponent={() => <PageTitle>Lista de Projetos</PageTitle>}
                data={projects.data || []}
                keyExtractor={project => String(project.id)}
                renderItem={({ item: project }) => (
                  <Project onPress={() => this.handleProjectPress(project)}>
                    <Cover
                      source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }}
                    />
                    <Info>
                      <Title>{project.title}</Title>
                      <Count>Causa Sociais</Count>
                      {/* <Count>{`${project.tracks.length} contando`}</Count> */}
                      <Count>Recife-PE</Count>
                    </Info>
                  </Project>
                )}
              />
            </View>
          </View>
        </SideMenu>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
