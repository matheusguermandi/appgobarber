import React, { useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  return (
    <>
      {/* Utilizado para subir o conteudo da tela do app quando o teclado é acionado */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        {/*
          Utilizado para gerar um scroll quando a tela é pequena
          keyboardShouldPersistTaps="handled" => Configuração para quando o teclado estiver aberto
          e relar fora o mesmo seja fechado
        */}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu cadastro</Title>
            </View>

            <Form ref={formRef} onSubmit={() => {}}>
              <Input name="name" icon="user" placeholder="Nome" />

              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToSignInText>Voltar para Logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignIn;
