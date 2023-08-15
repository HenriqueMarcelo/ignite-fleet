import { Car, Key } from 'phosphor-react-native'
import { Container, IconBox, Message, TextHighlight } from './styles'
import { useTheme } from 'styled-components'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  licensePlate?: string
}

export function CarStatus({ licensePlate, ...rest }: Props) {
  const theme = useTheme()
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso. `
    : `Nenhum veículo em uso. `
  const status = licensePlate ? 'chegada' : 'saída'

  const Icon = licensePlate ? Key : Car

  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={32} color={theme.COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message>
        {message}
        <TextHighlight>Clique aqui para registrar a {status}</TextHighlight>
      </Message>
    </Container>
  )
}
