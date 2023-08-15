import { forwardRef } from 'react'
import { Container, Input, Label } from './styles'
import { useTheme } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {
  label: string
}

const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    const theme = useTheme()

    return (
      <Container>
        <Label>{label}</Label>
        <Input
          ref={ref}
          autoCapitalize="sentences"
          placeholderTextColor={theme.COLORS.GRAY_400}
          multiline
          {...rest}
        />
      </Container>
    )
  },
)

TextAreaInput.displayName = 'TextAreaInput'

export { TextAreaInput }
