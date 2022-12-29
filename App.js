import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Inbox from './screens/Inbox';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'rubik-italic': require('./assets/fonts/Rubik-Italic.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Inbox onLayoutRootView={onLayoutRootView} />
  );
};