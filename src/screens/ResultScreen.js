import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import axios from 'axios';

const ResultScreen = ({route, navigation}) => {
  const {score, wrongQuestions} = route.params;
  const openDialog = () => {
    setopen(true);
  };
  const [open, setopen] = useState(false);
  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [postData, setPostData] = useState({}); // Your POST data should be stored here

  const handlePostRequest = async question => {
    console.log(
      '🚀 ~ file: ResultScreen.js:25 ~ handlePostRequest ~ question:',
      question,
    );
    try {
      const reqData = {
        question:
          'What is the organ that mainly performs nitrogenous excretion in humans?',
      };
      const apiUrl = 'http://10.0.2.2:5000/generate_reference'; // Replace with your API endpoint URL
      const response = await axios.post(apiUrl, reqData);
      console.log(
        '🚀 ~ file: ResultScreen.js:32 ~ handlePostRequest ~ response:',
        response.data,
      );

      // Handle the response data as needed
      setResponse(response.data);
      openDialog();
      setErrorMessage('');
    } catch (error) {
      console.log(
        '🚀 ~ file: ResultScreen.js:40 ~ handlePostRequest ~ error:',
        error,
      );
      // Handle any errors that occur during the request
      setResponse('');
      setErrorMessage('Error: ' + error.message);
    }
  };
  return (
    <ImageBackground
      style={styles.container2}
      source={require('../assets/bged.jpg')}>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={open}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        {/* <View style={styles.modalBackground}>
                <Text style={{color:'#fff'}}>
                 asda asdasdasd asdada
                </Text>
                <TouchableOpacity
            onPress={() =>  navigation.navigate('Home')}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>close</Text>
            </View>
          </TouchableOpacity>
              </View> */}
        <ImageBackground
          style={styles.container2}
          source={require('../assets/bged.jpg')}>
          <ScrollView style={styles.scrollContainer}>
            <Text style={{color: '#111'}}>{response.answer}</Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setopen(false)}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>close</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
      <Text style={styles.resultText}>Your Score: {score}</Text>
      {wrongQuestions.length > 0 && (
        <View>
          <Text style={styles.wrongHeader}>Wrong Questions:</Text>
          <FlatList
            data={wrongQuestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handlePostRequest(item.question)}
                style={styles.wrongItem}>
                <Text>
                  {index + 1}. {item.question}
                </Text>
                <Text>Correct Answer: {item.answer}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: COLORS.white,
    marginTop: 20,
  },
  wrongHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  wrongItem: {
    marginBottom: 10,
    backgroundColor: COLORS.white,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    width: 500,
  },
  slide2: {
    backgroundColor: COLORS.third,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 20,
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.1,
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  container2: {
    height: SIZES.height,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  scrollContainer: {
    flex: 1,
    margin: 20,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
