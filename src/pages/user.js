// user.js
import React, { Component } from 'react';
import api from '../services/api';
import {
  Container,
  Header,
  Avatarperfil,
  Nameperfil,
  Status,
  Location,
  Episode,
} from './styles';

export default class User extends Component {
  state = {
    character: {},
    firstEpisodeName: '',
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const characterData = user;

    if (characterData.episode && characterData.episode.length > 0) {
      const firstEpisodeUrl = characterData.episode[0];
      const episodeId = firstEpisodeUrl.split('/').pop();
      const episodeResponse = await api.get(`/episode/${episodeId}`);
      const episodeData = episodeResponse.data;

      this.setState({
        character: characterData,
        firstEpisodeName: episodeData.name,
      });
    } else {
      this.setState({
        character: characterData,
        firstEpisodeName: 'Episódio desconhecido',
      });
    }
  }

  render() {
    const { character, firstEpisodeName } = this.state;

    return (
      <Container>
        <Header>
          <Avatarperfil source={{ uri: character.image || '' }} />
          <Nameperfil>{character.name || 'Nome indisponível'}</Nameperfil>
          <Status>Status: {character.status || 'Indisponível'}</Status>
          <Location>Última localização: {character.location?.name || 'Desconhecida'}</Location>
          <Episode>Primeiro episódio: {firstEpisodeName}</Episode>
        </Header>
      </Container>
    );
  }
}
