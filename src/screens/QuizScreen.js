import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ route, navigation }) => {
  const { questions } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      // Quiz completed
      navigation.navigate('ResultScreen', { score, wrongQuestions });
    }
  }, [currentQuestionIndex, questions, navigation, score, wrongQuestions]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    } else {
      setWrongQuestions([...wrongQuestions, questions[currentQuestionIndex]]);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <View style={styles.container}>
      {currentQuestionIndex < questions.length ? (
        <View>
          <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      ) : (
        <Text style={styles.completed}>Quiz completed!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  completed: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
