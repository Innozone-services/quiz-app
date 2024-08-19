import { ApplicationProvider, Button, Card, Layout, Modal } from "@ui-kitten/components"
import * as eva from '@eva-design/eva';
import { quizTopics, data } from "../components/data/data";
import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";


export default QuizRoom = (props) => {

    const [singleQuestion, setSingleQuestion] = useState()
    const [visible, setVisible] = useState(false);
    const [answer, setAnswer] = useState("")
    const [lastQuestion, setLastQuestion] = useState(0)

    useEffect(() => {
        fetchQuestion()
    }, [props.navigation])

    function fetchQuestion() {
        const params = props?.route?.params
        if (params) {
            const filterQuizz = data.levels[0].topics.filter((eachTopic, index) => eachTopic.topic === params.item)
            if (filterQuizz.length > 0) {
                const allQuestions = filterQuizz[0].questions
                if (lastQuestion < filterQuizz[0].questions.length) {
                    const randomObject = allQuestions[lastQuestion];
                    setLastQuestion(lastQuestion + 1)
                    setSingleQuestion(randomObject)
                } else {
                    const randomObject = allQuestions[0];
                    setLastQuestion(1)
                    setSingleQuestion(randomObject)
                }
            }
        }
    }

    function NextQuestion() {
        fetchQuestion()
    }

    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <Layout style={{ flex: 1 }}>
                {singleQuestion &&
                    <QuestionCard
                    onNavigate={()=> props.navigation.replace("Profile")} 
                        data={singleQuestion}
                        onPress={(data) => {
                            if (data === singleQuestion.correctAnswer) {
                                setAnswer("Correct")

                            } else {
                                setAnswer("Wrong")
                            }
                            setVisible(true)
                        }} />
                }
            </Layout>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
            >
                <Card disabled={true} style={{ width: Dimensions.get('screen').width - 50, alignItems: 'center', padding: 20 }}>
                    <Text variant="medium" style={{
                        fontSize: 20,
                        color: 'white',
                        marginBottom: 10
                    }}>{answer} answer</Text>

                    <TouchableOpacity onPress={() => {
                        setVisible(false)
                        NextQuestion()

                    }}>
                        <LinearGradient
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["rgb(255, 255, 255)", "#f57e1b"]}
                            style={styles.signupbtn}
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 700, }}>
                                {answer == "Correct" ? "Next" : "Retry"}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>



                </Card>
            </Modal>

        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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