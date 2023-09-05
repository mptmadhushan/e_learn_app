import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';

const LeaderboardScreen = ({navigation}) => {
  const leaderboardData = [
    {
      name: 'John Doe',
      points: 500,
      image: require('../assets/av.jpg'), // Replace with actual image path
    },
    {
      name: 'Jane Smith',
      points: 450,
      image: require('../assets/av.jpg'), // Replace with actual image path
    },
    {
      name: 'Trycia',
      points: 100,
      image: require('../assets/av.jpg'), // Replace with actual image path
    },
    {
      name: 'Earlene',
      points: 250,
      image: require('../assets/av.jpg'), // Replace with actual image path
    },
    // Add more leaderboard entries here
  ];

  const renderLeaderboardItem = ({item}) => (
    <View
     
      style={styles.itemContainer}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points} points</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground  source={require('../assets/bged.jpg')} style={styles.container}>
      <Text style={styles.title1}>
          "Leaderboard"
        </Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderLeaderboardItem}
      />
      <View style={styles.rowNorm}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.slide1}>
              <View style={styles.centerFlex}>
                <Text style={styles.text001}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
    </ImageBackground>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: COLORS.white,
    padding:20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 16,
  },
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    marginTop: SIZES.height * 0.01,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    maxWidth: SIZES.width * 0.5,
    height: SIZES.width * 0.2,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.3,
    height: SIZES.height * 0.4,
    // alignItems: 'center',
  },
  title1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.height * 0.05,
    marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
});
