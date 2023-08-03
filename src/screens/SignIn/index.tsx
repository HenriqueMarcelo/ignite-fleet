import React, { useEffect, useState } from 'react'
import { Container, Slogan, Title } from './styles'

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { Alert } from 'react-native'
import { Realm, useApp } from '@realm/react'

WebBrowser.maybeCompleteAuthSession()

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  const app = useApp()

  function handleGoogleSignIn() {
    setIsAuthenticating(true)
    googleSignIn().then((resp) => {
      console.log(resp)
      if (resp.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication?.idToken,
        )
        app.logIn(credentials).catch((error) => {
          console.log(error)
          Alert.alert(
            'Entrar',
            'Não foi possível conectar com sua conta Google. Error no servidor.',
          )
          setIsAuthenticating(false)
        })
        // fetch(
        //   `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.authentication.idToken}`,
        // )
        //   .then((response) => response.json())
        //   .then(console.log)
      } else {
        Alert.alert('Entrar', 'Não foi possível conectar com sua conta Google.')
        setIsAuthenticating(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button
        isLoading={isAuthenticating}
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
      />
    </Container>
  )
}
