import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {'\n'}
          <UserName>Matheus Guermandi</UserName>
        </HeaderTitle>

        <ProfileButton>
          <UserAvatar
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/27836893?s=460&u=4d9a53c02a3d30c2e61c992f9ba603547129bfe0&v=4',
            }}
          />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
