import { useRoute } from '@react-navigation/native'
import {
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

type RouteParamsProps = {
  id: string
}

export function Arrival() {
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  return (
    <Container>
      <Header title="Chegada" />
      <Content>
        <Label>Placa do veículo</Label>
        <LicensePlate>XXX0000</LicensePlate>

        <Label>Finalidade</Label>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam
          assumenda dicta, odit inventore, id, blanditiis iste repudiandae et
          est totam eaque aliquid officiis nostrum! Ab, illum tempore? Neque,
          blanditiis.
        </Description>

        <Footer>
          <Button title="Registrar chegada" />
        </Footer>
      </Content>
    </Container>
  )
}
