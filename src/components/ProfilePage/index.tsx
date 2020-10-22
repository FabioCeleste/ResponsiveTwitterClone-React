import React from 'react';

import Feed from '../Feed'

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Fabio Celeste</h1>
        <h2>@fabio_celeste</h2>

        <p>
          Front end developer
        </p>

        <ul>
          <li>
            <LocationIcon />
              São Paulo, Brasil 
          </li>

          <li>
            <CakeIcon />
              Nascido em 21 de Maio de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo<strong> 37</strong>
          </span>
          <span>
          <strong>8 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
