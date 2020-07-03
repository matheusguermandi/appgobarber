import React, { useState, useEffect } from 'react';

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

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [providers, setProviders] = useState<Provider[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('/providers').then(response => {
      setProviders(response.data);
    });
  });

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton>
          <UserAvatar
            source={{
              uri: user.avatar_url,
            }}
          />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
