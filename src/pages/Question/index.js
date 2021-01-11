import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Bar } from 'react-native-progress'
import { manData, womanData } from '../../assets/data'
import { Button } from '../../components/Button'
import Constants from 'expo-constants'

const Question = () => {

    const [items, setItems] = useState([])
    const [selectedItem, setSelectedItem] = useState({})

    const navigation = useNavigation()
    const route = useRoute()
    const routeParams = route.params

    useEffect(()=> {
        setItems(routeParams.items)
    }, [])

    function handleSelectItem(item) {
        if (selectedItem != item) {
            setSelectedItem(item)
        }
    }

    function handleNavigateToQuestion(item) {
        // 1 -> man, 2 -> woman
        if (routeParams.sex == '1') {
            handleManDecisions(item)
        } else {
            handleWomanDecisions(item)
        }
    }

    function handleManDecisions(selectedItem) {
        if (selectedItem.stage == '1') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '2' && items[0].stage == '1' && items[1].stage == '2') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage2, manData.stage3], progress: routeParams.progress + 0.1 })
        } else if (selectedItem.stage == '2' && items[0].stage == '2' && items[1].stage == '3') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage2, manData.stage2a], progress: routeParams.progress + 0.1 })
        } else if (items[0].stage == '2' && items[1].stage == '2a') {
            if (selectedItem.stage == '2'){
                navigation.navigate('Result', {data: selectedItem})
            } else {
                navigation.navigate('Result', {data: selectedItem})
            }
        } else if (selectedItem.stage == '3' && items[0].stage == '2' && items[1].stage == '3') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage3, manData.stage3v], progress: routeParams.progress + 0.1 })
        } else if (selectedItem.stage == '3' && items[0].stage == '3' && items[1].stage == '3v') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage3, manData.stage3a], progress: routeParams.progress + 0.1 })
        } else if(items[0].stage == '3' && items[1].stage == '3a') {
            if (selectedItem.stage == '3'){
                navigation.navigate('Result', {data: selectedItem})
            } else {
                navigation.navigate('Result', {data: selectedItem})
            }
        } else if (selectedItem.stage == '3v' && items[0].stage == '3' && items[1].stage == '3v') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage3v, manData.stage4], progress: routeParams.progress + 0.1 })
        } else if(selectedItem.stage == '3v' && items[0].stage == '3v' && items[1].stage == '4') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '4' && items[0].stage == '3v' && items[1].stage == '4') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage4, manData.stage5], progress: routeParams.progress + 0.1 })
        } else if(selectedItem.stage == '4' && items[0].stage == '4' && items[1].stage == '5') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage4, manData.stage4a], progress: routeParams.progress + 0.1 })
        
        } else if (items[0].stage == '4' && items[1].stage == '4a') {
            if (selectedItem.stage == '4'){
                navigation.navigate('Result', {data: selectedItem})
            } else {
                navigation.navigate('Result', {data: selectedItem})
            }
        } else if (selectedItem.stage == '5' && items[0].stage == '4' && items[1].stage == '5') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage5, manData.stage6], progress: routeParams.progress + 0.1 })
        } else if (selectedItem.stage == '5' && items[0].stage == '5' && items[1].stage == '6') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '6' && items[0].stage == '5' && items[1].stage == '6') {
            navigation.push('Question', { sex: routeParams.sex, items: [manData.stage6, manData.stage7], progress: routeParams.progress + 0.1 })
        } else if (selectedItem.stage == '6' && items[0].stage == '6' && items[1].stage == '7') {
            navigation.navigate('Result', {data: selectedItem})
        } else {
            navigation.navigate('Result', {data: selectedItem})
        }
    }

    function handleWomanDecisions(selectedItem) {
        if (selectedItem.stage == '1') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '2' && items[0].stage == '1' && items[1].stage == '2') {
            navigation.push('Question', { sex: routeParams.sex, items: [womanData.stage2, womanData.stage3], progress: routeParams.progress + 0.25 })
        } else if (selectedItem.stage == '2' && items[0].stage == '2' && items[1].stage == '3') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '3' && items[0].stage == '2' && items[1].stage == '3') {
            navigation.push('Question', { sex: routeParams.sex, items: [womanData.stage3, womanData.stage4], progress: routeParams.progress + 0.25 })
        } else if (selectedItem.stage == '3' && items[0].stage == '3' && items[1].stage == '4') {
            navigation.navigate('Result', {data: selectedItem})
        } else if (selectedItem.stage == '4' && items[0].stage == '3' && items[1].stage == '4') {
            navigation.push('Question', { sex: routeParams.sex, items: [womanData.stage4, womanData.stage5], progress: routeParams.progress + 0.25 })
        } else if (selectedItem.stage == '4' && items[0].stage == '4' && items[1].stage == '5') {
            navigation.navigate('Result', {data: selectedItem})
        } else {
            navigation.navigate('Result', {data: selectedItem})
        }
    }

    return (
        <ImageBackground 
            source={require('../../assets/images/background-image.png')} 
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 10, }}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <Bar style={styles.progressBar} 
                    progress={routeParams.progress} 
                    width={Dimensions.get('window').width * .9} 
                    color={'#5068A9'} 
                    height={12} 
                    unfilledColor={'rgba(255, 255, 255, 0.67)'} 
                    borderColor={'transparent'} 
                />
                
                <View style={styles.textBox}>
                    <Text style={styles.text}>Marque a opção que mais parece com a sua quantidade de cabelo:</Text>
                </View>

                {items.map(item => (
                    <TouchableOpacity  
                    key={String(item.id)}
                    style={[
                        routeParams.sex == '1' ? styles.item : [styles.item, {width: '60%'}],
                        selectedItem == item ? styles.selectedItem : {}
                    ]} 
                    onPress={ () => {
                        handleSelectItem(item)
                        handleNavigateToQuestion(item)
                    } }
                    activeOpacity={0.6} 
                    >
                        <Image source={item.stage_url} style={{width: '90%', height: '90%'}} resizeMode='contain'/>
                    </TouchableOpacity>
                ))}

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
    item: {
        backgroundColor: '#F6F1FF',
        height: 225,
        width: '90%',
        padding:16,
        borderRadius: 10,
        marginVertical: 16,
        alignItems: 'center',
        alignSelf: 'center',
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
        marginTop: 60,
        marginBottom: 20,
        width: '90%',
    },
});

export default Question