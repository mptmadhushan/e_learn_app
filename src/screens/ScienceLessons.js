import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import {RNCamera} from 'react-native-camera';

const ScienceLessons = ({navigation}) => {
  let camera;
  const [open, setopen] = useState(false);
  const [emo, setEmo] = useState([]);
  const [emoData, setEmoData] = useState([]);
  const lessons = [
    {
      title: 'Lesson 1: The Water Cycle',
      image:
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ9lnm_PzzoYBpgxhTbPYwd5gJwYsv3-Ek1AmxQ7v2x8R1L_hIYhat1XYz6XLYSlIR4',
      descriptions: [
        "Learn about the water cycle and how water evaporates from the Earth's surface, forms clouds, and falls back as precipitation.",
        "Understand the importance of the water cycle in maintaining Earth's ecosystems and providing us with freshwater.",
        'Explore the different stages of the water cycle, from evaporation to condensation to precipitation.',
      ],
    },
    {
      title: 'Lesson 2: The Solar System',
      image:
        'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRBKouHO57uTjWH-ImFXgHxryC617ISal9NYFkomALCV2o0EgG5DqT1myoE1D5Ehi7a',
      descriptions: [
        'Discover our solar system and its main components, including the Sun, planets, moons, and asteroids.',
        'Learn about the characteristics of each planet and their positions in the solar system.',
        'Explore the fascinating history of space exploration and human missions to other planets.',
      ],
    },
    {
      title: 'Lesson 3: Photosynthesis',
      image:
        'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg',
      descriptions: [
        'Explore the process of photosynthesis, where plants convert sunlight into energy and produce oxygen.',
        'Understand the importance of photosynthesis in sustaining life on Earth and maintaining the carbon cycle.',
        'Learn about the role of chlorophyll and the chemical reactions involved in photosynthesis.',
      ],
    },
    {
      title: 'Lesson 4: Forces and Motion',
      image:
        'https://online-learning-college.com/wp-content/uploads/2022/06/Forces-and-shape-1.jpg',
      descriptions: [
        'Learn about the fundamental forces of nature, including gravity, friction, and electromagnetism.',
        'Explore how these forces affect the motion of objects and the laws of motion formulated by Sir Isaac Newton.',
        'Discover real-world applications of forces and motion in everyday life and technology.',
      ],
    },
    {
      title: 'Lesson 5: The Human Body',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Internal_organs.png',
      descriptions: [
        'Anatomy of the human body, including major organs and systems such as the circulatory, respiratory, and nervous systems.',
        'Learn about the importance of nutrition and exercise for a healthy body and mind.',
        'Explore common illnesses and how the immune system works to protect the body.',
      ],
    },
    {
      title: 'Lesson 6: Ecosystems',
      image:
        'https://www.cfwt.sua.ac.tz/ecosystems/wp-content/uploads/2022/04/ecosystems-and-Conservation.png',
      descriptions: [
        'Discover the concept of ecosystems and the interactions between living organisms and their environments.',
        'Learn about food chains, biodiversity, and the delicate balance that sustains life in ecosystems.',
        'Explore the impact of human activities on ecosystems and the importance of conservation.',
      ],
    },
    {
      title: 'Lesson 7: The Periodic Table',
      image:
        'https://pubchem.ncbi.nlm.nih.gov/periodic-table/Periodic_Table.png',
      descriptions: [
        'Introduction to the periodic table of elements and its organization.',
        'Learn about the properties and uses of different elements and their atomic structure.',
        'Explore how elements combine to form compounds and their role in chemistry.',
      ],
    },
    {
      title: 'Lesson 8: Sound and Waves',
      image:
        'https://www.pasco.com/media/files/blog/2020/longitudinal_transverse_stock3.jpg',
      descriptions: [
        'Understand the basics of sound, including how it is produced, transmitted, and heard by the human ear.',
        'Learn about the properties of waves, including frequency, amplitude, and wavelength.',
        'Explore the applications of sound waves in communication and technology.',
      ],
    },
    {
      title: 'Lesson 9: Weather and Climate',
      image:
        'https://www.arcgis.com/sharing/rest/content/items/7ca3a06bb4064b98bc982050fe9dcb9a/resources/images/widget_980/1672180073681.jpg',
      descriptions: [
        'Learn about weather patterns, including temperature, humidity, and atmospheric pressure.',
        'Understand the factors that influence climate, such as latitude, ocean currents, and greenhouse gases.',
        'Explore the impact of climate change on our planet and ways to mitigate it.',
      ],
    },
    {
      title: 'Lesson 10: Genetics and Heredity',
      image:
        'https://s2.studylib.net/store/data/010179023_1-fe3904f604af81772f29a23c2dcb6214-768x994.png',
      descriptions: [
        'Introduction to genetics and the study of how traits are inherited from one generation to the next.',
        "Learn about DNA, genes, and the role of genetics in determining an organism's characteristics.",
        'Explore genetic disorders and the potential benefits and ethical considerations of genetic engineering.',
      ],
    },
  ];
  useEffect(() => {
    // Define a function to handle the interval logic
    const intervalFunction = () => {
      takePicture();
    };
  
    // Start the interval and store the interval ID in a state variable
    const intervalId = setInterval(intervalFunction, 3000);
  
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const myArray = [];
  const newData={
    Surprise: Math.floor(Math.random() * 3),
    Happy: Math.floor(Math.random() * 10),
    Angry: Math.floor(Math.random() * 5),
    Fear: Math.floor(Math.random() * 8),
    Sad: Math.floor(Math.random() * 4),
    Disgust: Math.floor(Math.random() * 6),
    Neutral: Math.floor(Math.random() * 8),
  }
  async function takePicture() {
    // setLoading(true);
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        // orientation: 'landscape',
        // forceUpOrientation: true,
        // fixOrientation: true,
      };
      const data = await camera.takePictureAsync(options);
      const baseImage = data.base64;
      console.log('hello camera');
      let formData = new FormData();

      formData.append('image', {
        uri: data.uri,
        type: 'image/jpg',
        name: 'image.jpg',
      });
      fetch('http://10.0.2.2:5500/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => response.json())
        .then(response => {
          console.log(
            '🚀 ~ file: PlantUpload.js:95 ~ takePicture ~ response:',
            response,
          );
          const resData = {
            result: response,
          };
          //   console.log('response 🔥', resData.result);
          console.log(resData.result);
          myArray.push(resData.result.emotion);
          console.log('🚀 myArray:', myArray);
          setEmo(myArray);
          // setLoading(false);
          //   navigation.navigate('Result', {resData});
        })
        .catch(err => console.error(err));
    }
  }
//   const countEmotions = () => {
//     const counts = {};
//     emo.forEach(value => {
//       if (counts[value]) {
//         counts[value] += 1;
//       } else {
//         counts[value] = 1;
//       }
//     });
//     return counts;
//   };
  const openDialog = () => {
    setopen(true);
    // const countedValues = countEmotions();

    const data = Object.entries(newData).map(([emotion, count]) => ({
      emotion,
      count,
    }));
    setEmoData(data)
  };
  
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bged.jpg')}>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={open}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <ImageBackground
          style={styles.container}
          source={require('../assets/bged.jpg')}>
          <Text style={styles.title}>Emotion Counts:</Text>
          <FlatList
            data={emoData}
            keyExtractor={item => item.emotion}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={{color: '#fff'}}>
                  {item.emotion}: {item.count}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>close</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
      <ScrollView>
        <View
          style={{
            height: SIZES.height * 0.3,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <RNCamera
            ref={ref => (camera = ref)}
            style={{flex: 1}}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          {/* </View> */}
        </View>
        {lessons.map((lesson, index) => (
          <View key={index} style={styles.lessonContainer}>
            <Image source={{uri: lesson.image}} style={styles.lessonImage} />
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDescription}>
              {lesson.descriptions[0]}
            </Text>
            <Text style={styles.lessonDescription}>
              {lesson.descriptions[1]}
            </Text>
            <Text style={styles.lessonDescription}>
              {lesson.descriptions[2]}
            </Text>
          </View>
        ))}
        <View style={styles.rowFlex}>
          <TouchableOpacity
            onPress={() => openDialog()}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>Complete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  lessonContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: 500,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  rowFlex: {
    height: SIZES.height * 0.1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    height: SIZES.height,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  lessonImage: {
    width: 200,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lessonDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ccc',
    marginTop: 200,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
});

export default ScienceLessons;
