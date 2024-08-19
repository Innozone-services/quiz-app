import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Text from '../components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { quizTopics } from '../components/data/data';

export default function ProfileScreen({ navigation }) {
  

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visible, setVisible] = useState(false);

    const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
    };

    const renderToggleButton = () => (
        <TouchableOpacity style={styles.profileButton} onPress={()=> setVisible(!visible)}>
            <FontAwesome name="user" size={30} color="#536274" />
        </TouchableOpacity>
    );

    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <Layout style={styles.container} >
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View />
                        {/* <TouchableOpacity>
                            <SimpleLineIcons name="menu" size={30} color="white" />
                        </TouchableOpacity> */}
                        <Text style={styles.headerTitle}>Pick a Topic</Text>
                        <OverflowMenu
                            anchor={renderToggleButton}
                            visible={visible}
                            onBackdropPress={() => setVisible(false)}
                            style={{marginTop:10}}
                        >
                            <MenuItem title='Leaderboard' />
                            <MenuItem title='Logout' />

                        </OverflowMenu>

                    </View>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.infoSection}>
                        <Text variant="bold" style={styles.infoTitle}>Level</Text>
                        <Text variant="medium" style={styles.infoValue}>2</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoSection}>
                        <Text variant="bold" style={styles.infoTitle}>Points</Text>
                        <Text variant="medium" style={styles.infoValue}>1000</Text>
                    </View>
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    {quizTopics.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.quizCard} onPress={()=> navigation.navigate('Quizroom', {item : item})}>
                            <Text variant="medium" style={styles.quizText}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Layout>
        </ApplicationProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // backgroundColor: '#283747'
    },
    header: {
        height: 100,
        width: '100%',
        backgroundColor: '#536274',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    profileButton: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoCard: {
        flexDirection: 'row',
        width: 300,
        height: 70,
        backgroundColor: '#f77206',
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 20,
    },
    infoSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoTitle: {
        color: 'white',
        fontSize: 20,
    },
    infoValue: {
        color: 'white',
        fontSize: 16,
    },
    divider: {
        borderColor: 'white',
        height: '100%',
        borderWidth: 0.7,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
    },
    quizCard: {
        height: 70,
        width: '80%',
        backgroundColor: '#536274',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    quizText: {
        fontSize: 20,
        color: 'white',
    },
});
