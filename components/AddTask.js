import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTask(props) {
    const { submitHandler } = props
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New task...'
                onChangeText={changeHandler}            
            />
            <Button 
                onPress={() => submitHandler(text)} 
                title='Add Task' 
                color='#401AE1' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'rubik-italic',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})