import React, { useEffect, useState } from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native'
import { Merriweather_400Regular, Merriweather_700Bold, useFonts } from '@expo-google-fonts/merriweather'

import Routes from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		Merriweather_400Regular, 
		Merriweather_700Bold,
	})

	const [isReady, setIsReady] = useState(false)

	useEffect(()=>{
		setTimeout(()=>{ setIsReady(true) }, 3000)
	}, [fontsLoaded])

	if (!fontsLoaded || !isReady) {
		return <AppLoading />
	}

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
			<Routes />
		</>
	)
}