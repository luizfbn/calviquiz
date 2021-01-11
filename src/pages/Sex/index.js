import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Bar } from 'react-native-progress'
import { Button } from '../../components/Button'
import { manData, womanData } from '../../assets/data'
import Constants from 'expo-constants'

const Sex = () => {

    const [sex, setSex] = useState('')

    const navigation = useNavigation()

    function handleNavigateToQuestion(sex) {
        if (sex == 1) {
            navigation.navigate('Question', { sex: sex, items: [manData.stage1, manData.stage2], progress: 0.175 })
        } else if (sex == 2) {
            navigation.navigate('Question', { sex: sex, items: [womanData.stage1, womanData.stage2], progress: 0.175 })
        }
    }

    return (
        <ImageBackground 
            source={require('../../assets/images/background-image.png')} 
            style={styles.container}
            contentContainerStyle={{paddingBottom: 10,}}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <Bar style={styles.progressBar} 
                    progress={0.1} 
                    width={Dimensions.get('window').width * .9}
                    color={'#5068A9'} 
                    height={12} 
                    unfilledColor={'rgba(255, 255, 255, 0.67)'} 
                    borderColor={'transparent'} 
                />

                <View style={styles.textBox}>
                    <Text style={styles.text}>Para calcularmos seu estágio, precisamos saber qual o seu sexo biológico:</Text>
                </View>

                <View style={styles.itemBox}>
                    <TouchableOpacity  
                        style={[
                        styles.item,
                        sex == 1 ? styles.selectedItem : {}
                        ]} 
                        onPress={ () => {
                            setSex(1)
                            handleNavigateToQuestion(1)
                        }}
                        activeOpacity={0.6} 
                        >
                            <Text style={styles.itemText}>Homem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={[
                        styles.item,
                        sex == 2 ? styles.selectedItem : {}
                        ]} 
                        onPress={ () => { 
                            setSex(2)
                            handleNavigateToQuestion(2)
                        }}
                        activeOpacity={0.6} 
                        >
                            <Text style={styles.itemText}>Mulher</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.buttonBox}>
                    <Button
                        icon='arrow-left'
                        color='#5068A9'
                        background='#F6F1FF'
                        onPress={ navigation.goBack }
                    />
                    
                </View>

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
        padding: 16,
        alignSelf: 'flex-start',
        marginRight: 8
    },
    text: {
        fontFamily: 'Merriweather_400Regular',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'left',
    },
    itemBox: {
        alignItems:'center',
        marginHorizontal: 8,
        marginVertical: 32,
    },
    item: {
        backgroundColor: '#F6F1FF',
        height: 88,
        width: '80%',
        borderRadius: 10,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    itemText: {
        fontFamily: 'Merriweather_400Regular',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    selectedItem: {
        backgroundColor:'#D9E3FF',
        borderColor: '#5068A9',
        borderWidth: 2,
        shadowColor: '#5068A9',
    },
    buttonBox: {
        flexDirection: 'row',
        alignItems:'center',
        alignSelf:'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginTop: 100,
        marginBottom: 20,
        width: '90%',
    }
});

export default Sex