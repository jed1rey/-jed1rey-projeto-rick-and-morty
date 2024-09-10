import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #555;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
justify-content: center;
align-items: center;
background: #3498db;
margin-left: 10px;
padding: 0 12px;
`;
