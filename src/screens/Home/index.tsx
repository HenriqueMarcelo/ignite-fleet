import { useNavigation } from '@react-navigation/native'
import { CarStatus } from '../../components/CarStatus'
import { HomeHeader } from '../../components/HomeHeader'
import { Container, Content } from './styles'
import { useQuery } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/Historic'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export function Home() {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
  const { navigate } = useNavigation()
  function handleRegisterMovement() {
    navigate('departure')
  }

  const historic = useQuery(Historic)

  function fetchVehicle() {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0]
      setVehicleInUse(vehicle)
    } catch (error) {
      Alert.alert(
        'Veículo em uso',
        'Não foi possível carregar o veículo em uso.',
      )
      console.log(error)
    }
  }

  useEffect(() => {
    fetchVehicle()
  })

  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus
          onPress={handleRegisterMovement}
          licensePlate={vehicleInUse?.license_plate}
        />
      </Content>
    </Container>
  )
}
