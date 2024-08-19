import { StyleSheet, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import Text from './Text';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import LottieView from 'lottie-react-native';




export default function BeforeLoginLayout({ children }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient style={styles.container}
                colors={["rgb(255, 255, 255)", "#f57e1b",]}
                start={{ x: 0.5, y: 0.3, }}>
                <Image
                    style={{ height: 200, alignSelf: 'center', resizeMode:'contain' }}
                    resizeMode='contain'
                    source={require('../../../assets/quizlogo.png')} />

                <LottieView style={{ width:200, height:50, alignSelf:'center' }} source={require('../../../assets/welcome.json')} autoPlay duration={6000} />
                <Text variant="bold" style={{ fontSize: 25, color: 'white', alignSelf: 'center', color: 'black' }}>Quiz App</Text>

                {children}


            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#9431e6',
        gap:10

    },
    subheading: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    inputStyle: {

        bordercolor: '#CCCCCC',
        backgroundColor: 'rgba(240, 240, 240, 0.29)',
        height: 50,
        borderRadius: 25,
        elevation: 5,
        paddingHorizontal:20
    },
    welcome: {
        justifyContent: 'center',
        flex: 1
    },
    signupbtn: {
        height: 40,
        width: 130,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10
    },

});