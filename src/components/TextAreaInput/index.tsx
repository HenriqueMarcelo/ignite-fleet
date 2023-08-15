import React from 'react'
import { Container, Input, Label } from './styles'
import { useTheme } from 'styled-components/native'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  label: string
}

export function TextAreaInput({ label, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="sentences"
        placeholderTextColor={theme.COLORS.GRAY_400}
        multiline
        {...rest}
      />
    </Container>
  )
}
