import { StyleSheet, TouchableOpacity, View } from "react-native"
import Text from "./Text"
import Ionicons from '@expo/vector-icons/Ionicons';


const QuestionCard = ({ data, onPress, onNavigate }) => {


    return (
        <View style={{ justifyContent: 'center', height: '100%', width: '100%', padding: 30, }}>
            <Text variant="bold" style={{ color: 'white', fontSize: 24 }}>{data.question}</Text>
            <View style={{ marginTop: 30 }}>
                {shuffleArray(data.options).map((item, index) => (
                    <TouchableOpacity key={index} style={styles.quizCard} onPress={() => onPress(item)}>
                        <Text variant="medium" style={styles.quizText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={{ position: 'absolute', top:60, left:20 }} onPress={onNavigate}>
                <Ionicons name="exit-outline" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const styles = StyleSheet.create({

    quizCard: {
        height: 70,
        width: '80%',
        backgroundColor: '#536274',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: 'center'
    },
    quizText: {
        fontSize: 20,
        color: 'white',
    },
});

export default QuestionCard