import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/globalStyles';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header';

export default function Starred({ onLayoutRootView }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
          }}>  
            <View style={globalStyles.container} onLayout={onLayoutRootView} >
              <Header headerTitle='Starred' />
              <View style={globalStyles.content}>
              
              </View>
      
              <StatusBar style="auto" />
            </View>
          </TouchableWithoutFeedback>
    );
};