/* eslint-disable react-native/no-inline-styles */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import firebase from '../helpers/firebase';

import Toast from 'react-native-simple-toast';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import APIKit from '../helpers/apiKit';

import AsyncStorage from '@react-native-community/async-storage';
const LoginScreen = ({navigation}) => {
  useEffect(() => {});

  const [email, setEmail] = useState('');
  const [userPasswor, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const storeData = async value => {
    console.log(value);

    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      navigation.navigate('Home');
    } catch (e) {
      // saving error
    }
  };
  const onPressLogin = () => {
    const username = email;
    const password = userPasswor;
    navigation.navigate('Home');
    // navigation.navigate('Home');
    // const payload = {password, username};
    // console.log('send data', username, password);
    // if (!username) {
    //   Toast.showWithGravity('Please enter username', Toast.LONG, Toast.TOP);
    // }
    // if (!password) {
    //   Toast.showWithGravity('Please enter password', Toast.LONG, Toast.TOP);
    // } else {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(username, password)
    //     .then(res => {
    //       navigation.navigate('Home');

    //       console.log('User registered successfully!');
    //     });
    // }
  };
  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/bged.jpg')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          width: SIZES.width,
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <TextInput
                label={'User Name'}
                keyboardType="email-address"
                style={[isValid ? styles.inputStyleError : styles.inputStyle]}
                placeholder="User Name"
                placeholderTextColor={COLORS.white}
                onChangeText={text => {
                  setError;
                  setEmail(text);
                }}
                error={isValid}
              />
            </View>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <TextInput
                label={'Password'}
                secureTextEntry
                style={[
                  styles.inputStyle,
                  isValid ? styles.inputStyleError : '',
                ]}
                placeholder="Password"
                placeholderTextColor={COLORS.white}
                error={isValid}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>

          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => onPressLogin()}>
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTextStyle2: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.3,
  },
  rowFlex: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
  },
  mainBody: {
    // backgroundColor: '#FAFAFA',
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'center',
  },
  SectionStyle: {
    // backgroundColor: COLORS.secondary,
    // borderColor: COLORS.white,
    height: 40,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
    marginTop: 50,
    color: COLORS.white,
    height: 40,
    width: 130,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    color: COLORS.white,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: COLORS.white,
    width: SIZES.width * 0.7,
  },
  inputStyleError: {
    flex: 1,
    color: COLORS.third,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
  registerTextStyle: {
    color: '#4c5a5b',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.05,
  },
});
