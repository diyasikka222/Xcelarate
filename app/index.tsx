import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>XCELARATE</Text>

          <View style={styles.bottomRight}>
            <Text style={styles.subtitle}>Powered By </Text>
            <Image
              source={require('../assets/images/Xebia.png')}
              style={styles.logo}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/Opening')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // backgroundImage: {
  //  flex: 1, // Ensures it covers the full screen
  //   width: '100%', // Ensures the image is stretched to the full width
  //   height: '100%', // Ensures the image is stretched to the full height
  // },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blacka',
    marginTop: 96,
  },
  poweredBy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 80,
  },
  poweredByText: {
    fontSize: 12,
    color: '#4B5563',
    marginRight: 4,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#740968',
    paddingVertical: 16,
    paddingHorizontal: 96,
    borderRadius: 9999,
    marginTop: 256,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
  },
});
