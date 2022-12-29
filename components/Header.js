import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header({ headerTitle }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{headerTitle}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#401AE1',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'rubik-medium',
        color: '#ffffff',
    }
})