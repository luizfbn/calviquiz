import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native'
import { Merriweather_400Regular, Merriweather_700Bold, useFonts } from '@expo-google-fonts/merriweather'

import Routes from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		Merriweather_400Regular, 
		Merriweather_700Bold,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
			<Routes />
		</>
	)
}