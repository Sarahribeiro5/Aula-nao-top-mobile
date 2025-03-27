import { View, Text, Button } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {
  const navigation = useNavigation();

  const handHideHeader = () => {
    navigation.setOptions({headerShown: false});
  }

  return (
    <View>
      <Stack.Screen options={{ 
        title: 'Senai',
        headerRight: () => {
          <Button 
          onPress={() => alert('Olá, Aula de MObile')}
          title="Info"
          color="#000" 
          />
        },
        headerStyle: {
          backgroundColor: '#FFD700',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        },

        }}/>

        <Button title="Ocultar Header" onPress={handHideHeader}></Button>




      <Text>Bem-vindo à tela inicial!</Text>
      <Link href="/sobre">Ir para Sobre</Link>
    </View>
  );
}