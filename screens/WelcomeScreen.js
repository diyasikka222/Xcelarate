// import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import React from 'react';

// export default function WelcomeScreen({ navigation }) {
//   return (
//     <SafeAreaView className="flex-1 bg-red items-center justify-center">
//       <View className="w-5/6 items-center h-4/5">
//         <Text className="text-5xl font-bold text-black mt-24">XCELARATE</Text>

//         <View className="flex-row items-center mt-4 ml-20">
//           <Text className="text-sm text-gray-700 mr-1">Powered by</Text>
//           {<Image
//             source={require('../assets/adaptive-icon.png')}
//             className="w-12 h-6"
//             resizeMode="contain"
//           />}
//         </View>

//         <TouchableOpacity
//           className="bg-purple-800 py-4 px-24 rounded-full mt-64 shadow"
//           onPress={() => navigation.navigate('Assessment')}
//         >
//           <Text className="text-white font-semibold text-base">Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }










import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  
  export default function WelcomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>XCELARATE</Text>
  
          <View style={styles.poweredBy}>
            <Text style={styles.poweredByText}>Powered by</Text>
            <Image
              source={require('../assets/Xebia.jpg')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AssessmentPortal')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      width: '83%',
      height: '80%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
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
      width: 48,
      height: 24,
    },
    button: {
      backgroundColor: '#6B21A8', 
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
  });
  