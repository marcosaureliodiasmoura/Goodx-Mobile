import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  height: 50px;
`;

export const DonateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 40px;
  width: 100px;
  background: #1db954;
  margin: 20px 5px 0;
  border-radius: 5px;
  flex-direction: row;

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
