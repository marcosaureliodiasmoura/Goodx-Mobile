import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: colors.backgroundDarker,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.darkTransparent,
  },

  header: {
    backgroundColor: colors.backgroundDarker,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkTransparent,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 10,
    height: 54 + getStatusBarHeight() + 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },

  content: {
    flex: 1,
    backgroundColor: '#111',
  },
});

export const ProjectList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 2,
    paddingBottom: getStatusBarHeight() + 30,
  },
})``;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

// TouchableOpacity: Quando eu passo o mouse em cima
// attrs: serve para eu trabalhar a estilização do opacity. (Tudo que for Visual)
export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Cover = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Count = styled.Text`
  color: #c4c4c4;
  font-size: 16px;
  margin-top: 3px;
`;

export default styles;
