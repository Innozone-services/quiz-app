import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import Text from '../components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BeforeLoginLayout from '../components/BeforLoginLayout';


export default function SignupScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <BeforeLoginLayout>
            <BlurView intensity={80} tint='dark' style={{
                padding: 30,
                gap: 10,
                borderRadius: 35,
                overflow: 'hidden',
                width: '95%',
                alignSelf: 'center',
            }}>

                <Text variant="medium" style={styles.subheading}>User Name</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={username}
                    placeholder='UserName'
                    placeholderTextColor={'white'}
                    onChangeText={setusername} />
                <Text variant="medium" style={styles.subheading}>Email</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    placeholder='Enter your email'
                    placeholderTextColor={'white'}
                    onChangeText={setEmail} />
                <Text variant="medium" style={styles.subheading}>Password</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={password}
                    placeholder='Enter your password'
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                    onChangeText={setPassword} />


                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <LinearGradient
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["rgb(255, 255, 255)", "#f57e1b"]}
                            style={styles.signupbtn}
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 700, }}>
                                Signup
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <LinearGradient
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["rgb(255, 255, 255)", "#f57e1b"]}
                            style={styles.signupbtn}
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 700, }}>
                                Login
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50, top: 5, }}>
                    <TouchableOpacity>
                        <Image style={{ height: 35, width: 35 }} source={require('../../../assets/google.png')} />
                    </TouchableOpacity>
                </View>
            </BlurView>
        </BeforeLoginLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#9431e6',
        gap: 10

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
        paddingHorizontal: 20
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
        marginTop: 10
    },


});