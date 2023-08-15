import { TouchableOpacity } from 'react-native'
import { Container, Title } from './styles'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const { goBack } = useNavigation()
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 42

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={theme.COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  )
}
