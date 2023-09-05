import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ResultScreen from '../screens/ResultScreen';
import PlantUpload from '../screens/PlantUpload';
import ScienceLessons from '../screens/ScienceLessons';
import TestChart from '../screens/chart';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
import QuizScreen from '../screens/QuizScreen';

// import backimg from '../assets/images/arrow-back-12-512.png';
const Stack = createStackNavigator();
// const ActionBarImage = () => {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <Image
//         source={backimg}
//         tintColor='#2d3436'
//         style={{
//           tintColor: 'white',
//           width: 25,
//           height: 25,
//           borderRadius: 40 / 2,
//           marginLeft: 15,
//         }}
//       />
//     </View>
//   );
// };
function MainStackNavigator() {
  const questions = [
    {
      question:
        'What is the organ that mainly performs nitrogenous excretion in humans?',
      options: ['a) kidneys', 'b) lungs', 'c) liver', 'd) skin'],
      answer: 'a) kidneys',
    },
    {
      question: 'What is the atomic number of carbon?',
      options: ['a) 5', 'b) 12', 'c) 14', 'd) 6'],
      answer: 'd) 6',
    },
    {
      question: "Which gas is the most abundant in Earth's atmosphere?",
      options: ['a) Oxygen', 'b) Nitrogen', 'c) Carbon dioxide', 'd) Hydrogen'],
      answer: 'b) Nitrogen',
    },
    {
      question:
        'What is the process by which plants make their own food using sunlight?',
      options: [
        'a) Respiration',
        'b) Photosynthesis',
        'c) Fermentation',
        'd) Combustion',
      ],
      answer: 'b) Photosynthesis',
    },
    {
      question: 'What is the unit of electrical resistance?',
      options: ['a) Watt', 'b) Ampere', 'c) Ohm', 'd) Joule'],
      answer: 'c) Ohm',
    },
    {
      question: 'Which of the following is a renewable source of energy?',
      options: ['a) Natural gas', 'b) Coal', 'c) Wind', 'd) Petroleum'],
      answer: 'c) Wind',
    },
    {
      question:
        "What is the primary greenhouse gas responsible for trapping heat in Earth's atmosphere?",
      options: ['a) Oxygen', 'b) Carbon dioxide', 'c) Methane', 'd) Nitrogen'],
      answer: 'b) Carbon dioxide',
    },
    {
      question: 'What is the SI unit of force?',
      options: ['a) Kilogram', 'b) Newton', 'c) Joule', 'd) Watt'],
      answer: 'b) Newton',
    },
    {
      question: 'What is the chemical symbol for the element oxygen?',
      options: ['a) O2', 'b) O3', 'c) O', 'd) H2O'],
      answer: 'c) O',
    },
    {
      question: 'Which of the following is a renewable source of energy?',
      options: [
        'a) Natural Gas',
        'b) Coal',
        'c) Solar Power',
        'd) Nuclear Power',
      ],
      answer: 'c) Solar Power',
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        {/* <Stack.Screen
          name="Chart"
          // options={{  }}
          component={TestChart}
          options={{
            headerShown: true,
            title: 'Daily Analysis',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => <ActionBarImage />,
          }}
        /> */}
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="PlantUpload"
          options={{headerShown: false}}
          component={PlantUpload}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        /> 
        <Stack.Screen
          name="ScienceLessons"
          options={{headerShown: false}}
          component={ScienceLessons}
        />
        <Stack.Screen
          name="ResultScreen"
          options={{headerShown: false}}
          component={ResultScreen}
        />
      <Stack.Screen
          name="QuizScreen"
          options={{headerShown: false}}
          component={QuizScreen}
          initialParams={{questions}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default MainStackNavigator;
