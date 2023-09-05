import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,ScrollView
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  // const {resData} = route.params;
  const result = {
    symptoms: [
      '•	Coconut Rhinoceros Beetle (CRB) The Coconut Rhinoceros Beetle (CRB) is a large pest insect that feeds on coconut trees, as well as other palms, fruit trees, and ornamental plants. It is native to Southeast Asia and has been introduced to other parts of the world, including the Pacific Islands and the Middle East. Adult beetles can grow up to 6 centimeters in length, and their larvae are destructive to the root systems of plants, leading to wilting and eventual death. The CRB is considered a significant threat to coconut production and has caused millions of dollars in damage to crops.',
      '•	Red Palm Weevil (RPW) The Red Palm Weevil (RPW) is a type of invasive insect that attacks palm trees. It is considered one of the most damaging pests to palm trees and can cause significant economic losses in areas where palms are a major crop. The adult weevils are large, dark brown to black insects with a long snout and can grow up to 5 cm in length. The larvae feed on the inner tissues of the palm tree, causing extensive damage and often leading to the death of the host tree. RPW is native to tropical Asia, but has spread to other parts of the world, including the Middle East, Europe, Africa, and parts of the Americas.       ',
      '•	Coconut Mites Coconut mites are small arachnids that feed on the leaves and fruits of coconut palms. They are also known as red palm mites or Raoiella indica. These mites are native to Asia but have spread to other parts of the world, including Africa, the Caribbean, and South America. Coconut mites can cause significant damage to coconut palms, leading to reduced yields and even death of the tree if left unchecked. Control measures include the use of pesticides and biological control agents.',
      '•	Coconut Scale Insect Coconut Scale Insect (Aspidiotus destructor) is a pest that affects coconut trees and other palm species. It is a tiny, sap-sucking insect that feeds on the sap of young leaves, causing the leaves to turn yellow and eventually die. The scale insect also secretes a protective waxy coating, which makes it difficult to control with insecticides. Left untreated, a severe infestation of Coconut Scale Insect can lead to the death of the palm tree. The pest is found in tropical and subtropical regions worldwide and is a significant threat to the coconut industry.',
      '•	Nipah Virus Transmitters Nipah virus (NiV) transmitters are typically fruit bats of the Pteropodidae family, also known as flying foxes. These bats are considered the natural reservoir of NiV, meaning they can harbor the virus without getting sick and can transmit it to other animals or humans through their saliva, urine, or feces. Other animals that can become infected with NiV include pigs and other domestic animals. Human-to-human transmission has also been reported in some outbreaks, primarily among healthcare workers and those in close contact with infected individuals.',  
    ],
    solutions: [
      'Aute dolore consectetur dolore',
      ' ut excepteur officia et commodo do.',
    ],
  };
  // const result = resData.result.detail;
  // console.log('hello from res', resData);
  console.log(result);
  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/2531.jpg_wh860.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        {/* <Text style={styles.title2}>{result.name}</Text> */}
        <ScrollView >
        <View style={{alignItems: 'center', paddingHorizontal: 20,marginTop:400}}>
          {/* {result.symptoms &&
            result.symptoms.map(list => ( */}
              <Text style={styles.des} >
                {/* {list} */}
               Banana variety - Cavendish banana
              </Text>
            {/* ))} */}
          {/* <Text style={styles.title}>Solutions</Text> */}
          {/* 
          {result.solutions &&
            result.solutions.map(list => ( */}
          {/* <Text style={styles.des}>
            Overall, incorporating coconut into your diet and beauty routine can
            have many health and beauty benefits.
          </Text> */}
          {/* // ))} */}
        </View><View style={{alignItems: 'center', paddingHorizontal: 20}}>
          {/* {result.symptoms &&
            result.symptoms.map(list => ( */}
              <Text style={styles.des} >
                {/* {list} */}
               Recommendation - NO
              </Text>
            {/* ))} */}
          {/* <Text style={styles.title}>Solutions</Text> */}
          {/* 
          {result.solutions &&
            result.solutions.map(list => ( */}
          {/* <Text style={styles.des}>
            Overall, incorporating coconut into your diet and beauty routine can
            have many health and beauty benefits.
          </Text> */}
          {/* // ))} */}
        </View>


        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.2,
    height: SIZES.height * 0.78,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    borderRadius: 50,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: 'white',
  },
  title2: {
    // marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
