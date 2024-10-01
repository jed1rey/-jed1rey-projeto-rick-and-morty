import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #0a0a18;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #00ffff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#39ff14',
})`
  flex: 1;
  height: 40px;
  background: #1b0033;
  border: 1px solid #ff00ff;
  border-radius: 5px;
  padding: 0 10px;
  color: #ffffff;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #ff00ff;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #2c003e;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #00ffcc;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #ff00ff;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background-color: #00ffff;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #0a0a18;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #ff00ff;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #00ff00;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #39ff14;
  margin-top: 2px;
`;

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Avatarperfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #2c003e;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #ff00ff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #00ffcc;
  margin-top: 5px;
  text-align: center;
`;

export const Status = styled.Text`
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
`;

export const Location = styled.Text`
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
`;

export const Episode = styled.Text`
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
`;
