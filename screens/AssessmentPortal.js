// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   SafeAreaView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const AssessmentPortal = ({ navigation }) => {
//   return (
//     <SafeAreaView className="flex-1 bg-black justify-center items-center">
//       <View className="aspect-[9/16] h-full w-[86%] max-w-[360px] self-center rounded-2xl overflow-hidden">
//         <ImageBackground
//           source={require('../assets/background.png')}
//           className="flex-1 justify-start"
//           resizeMode="cover"
//         >
//           <View className="flex-1">
//             <View style={styles.headerWrapper}>
//               <Icon name="user-circle" size={28} color="#fff" style={styles.icon} />
//               <View className="items-center justify-center mt-[70px]">
//                 <Text className="text-white text-[28px] font-bold leading-[32px] text-center">
//                   ASSESSMENT{'\n'}PORTAL
//                 </Text>
//               </View>
//             </View>

//             <View className="flex-1" />

//             <View className="px-5 pb-8 space-y-3">
//               <TouchableOpacity className="bg-white py-3 rounded-full items-center shadow-md">
//                 <Text className="text-black font-bold text-lg">START NEW ASSESSMENT</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 className="bg-white py-3 rounded-full items-center shadow-md"
//                 onPress={() => navigation.navigate('Welcome')}
//               >
//                 <Text className="text-black font-bold text-lg">LOG OUT</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   headerWrapper: {
//     backgroundColor: '#800080',
//     borderBottomLeftRadius: 400,
//     borderBottomRightRadius: 400,
//     height: 250,
//     marginTop: -60,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   icon: {
//     position: 'absolute',
//     top: 16,
//     right: 20,
//   },
// });

// export default AssessmentPortal;









import React from 'react';
  import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

  const AssessmentPortal = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.flexContainer}>
              {/* Header */}
              <View style={styles.headerWrapper}>
                <Icon name="user-circle" size={28} color="#fff" style={styles.icon} />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                    ASSESSMENT{'\n'}PORTAL
                  </Text>
                </View>
              </View>

              {/* Spacer */}
              <View style={styles.flex1} />

              {/* Buttons */}
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>START NEW ASSESSMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Welcome')}
                >
                  <Text style={styles.buttonText}>LOG OUT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      aspectRatio: 9 / 16,
      height: '100%',
      width: '86%',
      maxWidth: 360,
      alignSelf: 'center',
      borderRadius: 20,
      overflow: 'hidden',
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    flexContainer: {
      flex: 1,
    },
    headerWrapper: {
      backgroundColor: '#800080',
      borderBottomLeftRadius: 400,
      borderBottomRightRadius: 400,
      height: 250,
      marginTop: -60,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    icon: {
      position: 'absolute',
      top: 16,
      right: 20,
    },
    titleContainer: {
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 32,
      textAlign: 'center',
    },
    flex1: {
      flex: 1,
    },
    buttonWrapper: {
      paddingHorizontal: 20,
      paddingBottom: 32,
      gap: 12,
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 12,
      borderRadius: 9999,
      alignItems: 'center',
      elevation: 4,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

  export default AssessmentPortal; 
