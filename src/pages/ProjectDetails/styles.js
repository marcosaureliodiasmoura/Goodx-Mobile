import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;
export const ProjectDetails = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

// A view que fica por volta de tudo
export const Details = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

// position absolute: pra ficar atrás de todos os componentes do PodcastDetails
export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${340 + getStatusBarHeight()}px;
  opacity: 0.2;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30};
`;

export const ProjectTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

// TouchableOpacity:

// align-self: stretch pra ocupar toda a largura
// sendo que o componente que tem por volta dele, que é o podcastDetails tem um align-item: center
// Com isso, vai tentar deixar o item mais centralizado possível e o align-self: stretch vai fazer o contrário
// vai expandir as lateriais deste item.
// export const PlayButton = styled.TouchableOpacity`

// Vou diminuir a opacidade do botão ao clicar com attrs
export const DonateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 50px;
  background: #1db954;
  margin: 30px 40px 0;
  border-radius: 25px;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const DonateButtonText = styled.Text`
  color: #eee;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 14px;
  margin-top: 3px;
`;
