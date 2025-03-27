import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="Index" options={{ tile: 'Home' }}/>
            <Stack.Screen name="about" options={{ tile: 'Sobre' }}/>
            <Stack.Screen name="(aux)/termos" options={{ tile: 'Termos de uso' }}/>
            
        </Stack>
    )
    }