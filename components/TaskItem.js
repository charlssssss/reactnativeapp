import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TaskItem(props) {
    const { item, pressHandler } = props

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <AntDesign name='delete' size={20} color='black' />
                <Text style={styles.taskText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    taskText: {
        paddingHorizontal: 20,
        fontFamily: 'rubik-regular',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})