import { SafeAreaView, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import mock from './src/mocks/cesta'


export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold 
  })

  if (!fontCarregada) {
    return <View />
  }
  
  return (
    <SafeAreaView>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
