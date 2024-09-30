import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

import api from '../services/api';

export default class Main extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get('/character');
    this.setState({
      users: response.data.results,
      loading: false,
    });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return (
        <Container>
          <ActivityIndicator size="large" color="#000" />
        </Container>
      );
    }

    return (
      <Container>
        <List
          data={users}
          keyExtractor={(user) => String(user.id)}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.image || '' }} />
              <Name>{item.name || 'Nome indisponível'}</Name>
              <Bio>Status: {item.status || 'Indisponível'}</Bio>

              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate('user', { user: item });
                }}
              >
                <ProfileButtonText>Ver Mais Detalhes</ProfileButtonText>
              </ProfileButton>

              <ProfileButton
                onPress={() => {
                  this.setState({
                    users: this.state.users.filter((user) => user.id !== item.id),
                  });
                }}
                style={{ backgroundColor: '#FFC0CB' }}
              >
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
