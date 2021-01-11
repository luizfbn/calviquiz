import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

export function Button({ icon, color, background, borderColor, onPress, disabled }) {
    return (
        <TouchableOpacity
            onPress={() => !disabled && onPress()}
            style={[styles.button, { backgroundColor: background }, 
                borderColor ? { borderWidth: 2, borderColor: borderColor } : { borderColor: background }, 
                disabled? {backgroundColor: 'grey'} : {}]}
            
        >
            <Text>
                <Icon name={icon} color={color} size={19} />
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
})
