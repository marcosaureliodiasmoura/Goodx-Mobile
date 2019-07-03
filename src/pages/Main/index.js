import React, { Component } from 'react';

import {
  View, TouchableOpacity, Text, AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectsActions from '../../store/ducks/projects';

import styles, {
  ProjectList, Podcast, Cover, Info, Title, Count,
} from './styles';

import project from './projectText';

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
    // AsyncStorage.clear();
  }

  render() {
    const { projects } = this.props;
    console.log(this.props);

    return (
      <View style={styles.backgroundWrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{
                top: 5,
                bottom: 5,
                left: 10,
                right: 10,
              }}
              onPress={() => {}}
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
              onPress={() => {}}
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
                <Podcast onPress={() => {}}>
                  <Cover
                    source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }}
                  />
                  <Info>
                    <Title>{project.title}</Title>
                    <Count>Causa Sociais</Count>
                    {/* <Count>{`${project.tracks.length} contando`}</Count> */}
                    <Count>Recife-PE</Count>
                  </Info>
                </Podcast>
              )}
            />
          </View>
        </View>
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
