import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './src/app/screens/HomeScreen';
import SignupScreen from './src/app/screens/SignupScreen';
import ForgetScreen from './src/app/screens/ForgetScreen';
import ProfileScreen from './src/app/screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@ui-kitten/components';
import QuizRoom from './src/app/screens/QuizRoom';

const Stack = createStackNavigator()
export default function App() {

  const [loaded, error] = useFonts({
    'Source-Sans': require('./assets/fonts/SourceSans.ttf'),
    'Source-Sans-Bold': require('./assets/fonts/SourceSans3-Bold.ttf'),
    'Source-Sans-Medium': require('./assets/fonts/SourceSans3-Medium.ttf'),
    'Source-Sans-Regular': require('./assets/fonts/SourceSans3-Regular.ttf'),
    'Source-Sans-Light': require('./assets/fonts/SourceSans3-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Forget" component={ForgetScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Quizroom" component={QuizRoom} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      <StatusBar style="light" />
    </>
  );
}


