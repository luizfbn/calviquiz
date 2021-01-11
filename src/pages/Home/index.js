import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { Button } from '../../components/Button'

const Home = () => {

    const navigation = useNavigation()

    function handleNavigateToSex() {
        navigation.navigate('Sex')
    }

    return (
        <ImageBackground 
            source={require('../../assets/images/background-image.png')} 
            style={styles.container}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{alignItems: 'center', paddingBottom: 10,}}
            >

                <Image source={require('../../assets/images/home-image.png')} style={styles.image} resizeMode='contain'/>

                <View style={styles.textBox}>
                    <Text style={styles.text}>Entenda em qual estágio de calvície você está, apenas com algumas perguntas</Text>
                    <Text style={styles.text}>Lembre-se, isso não troca o diagnóstico e tratamento médico, procure um médico e não se automedique.</Text>
                    <Text style={styles.subText}>Vamos lá?</Text>
                </View>
                
                <Button
                    icon='arrow-right'
                    color='#FFF'
                    background='#5068A9'
                    onPress={ handleNavigateToSex }
                />

            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 8,
    },
    image: {
        marginTop: 8,
        width: '95%',
        height: 288,
    },
    textBox: {
        marginVertical: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 10,
    },  
    text: {
        fontFamily: 'Merriweather_400Regular',
        fontSize: 18,
        color: '#3F3F3F',
        textAlign: 'center',
        marginBottom: 20,
    },
    subText: {
        fontFamily: 'Merriweather_700Bold',
        fontSize: 20,
        color: '#3F3F3F',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Home