import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Bar } from 'react-native-progress'
import Constants from 'expo-constants'
import { Button } from '../../components/Button'

const Result = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const routeParams = route.params

    function handleNavigateToHome() {
        navigation.navigate('Home')
    }

    return (
        <ImageBackground 
            source={require('../../assets/images/background-image.png')} 
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 10, }}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{alignItems: 'center', paddingBottom: 10,}}
            >
                <Bar style={styles.progressBar}
                    progress={1} 
                    width={Dimensions.get('window').width * .9} 
                    color={'#5068A9'} 
                    height={12} 
                    unfilledColor={'rgba(255, 255, 255, 0.67)'} 
                    borderColor={'transparent'} 
                />

                <View style={styles.textBox}>
                    <Text style={styles.textTitle}>Você está no {routeParams.data.title} de calvíce</Text>
                    <Image source={routeParams.data.stage_url}  resizeMode='contain' style={{width: Dimensions.get('window').width * .7, height: 150, marginVertical: 16,}}/>
                    <Text style={styles.text}>{routeParams.data.description}</Text>
                </View>
                
                <Button
                    icon='rotate-ccw'
                    color='#FFF'
                    background='#5068A9'
                    onPress={ handleNavigateToHome }
                />

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    progressBar: {
        marginVertical: 40,
        marginHorizontal: 8,
        alignSelf:'center',
    },
    textBox: {
        backgroundColor: '#5068A9',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        alignSelf: 'flex-start',
        marginRight: 8,
        alignItems:'center',
        marginBottom: 40,
    },
    textTitle: {
        fontFamily: 'Merriweather_700Bold',
        fontSize: 22,
        color: '#FFF',
        textAlign: 'left',
        lineHeight: 33,
    },
    text: {
        fontFamily: 'Merriweather_400Regular',
        fontSize: 16,
        color: '#FFF',
        textAlign: 'left',
        lineHeight: 33,
    },
});

export default Result