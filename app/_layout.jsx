// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   ScrollView,
//   Platform,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const SignUpScreen = () => {
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];

//   return (
//     <ImageBackground
//       source={require('../assets/images/0001.jpg')}
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.overlay} keyboardShouldPersistTaps="handled">
//         <Text style={styles.title}>SIGN UP</Text>

//         <View style={styles.inputContainer}>
//           <Icon name="user" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Username" placeholderTextColor="#999" style={styles.input} />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="envelope" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Email ID" placeholderTextColor="#999" style={styles.input} keyboardType="email-address" />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="phone" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Contact Details" placeholderTextColor="#999" style={styles.input} keyboardType="phone-pad" />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="building" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Organisation" placeholderTextColor="#999" style={styles.input} />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="briefcase" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Designation" placeholderTextColor="#999" style={styles.input} />
//         </View>

//         <View style={styles.dropdownWrapper}>
//           <Text style={styles.label}>Location</Text>
//           <View style={styles.dropdownContainer}>
//             <Picker
//               selectedValue={selectedLocation}
//               onValueChange={(itemValue) => setSelectedLocation(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#800080"
//               mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//             >
//               <Picker.Item label="Select a location" value="" />
//               {locations.map((loc) => (
//                 <Picker.Item key={loc} label={loc} value={loc} />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="lock" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Create Password" placeholderTextColor="#999" style={styles.input} secureTextEntry />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="lock" size={18} color="#999" style={styles.icon} />
//           <TextInput placeholder="Confirm Password" placeholderTextColor="#999" style={styles.input} secureTextEntry />
//         </View>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Create Account</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.button, styles.loginButton]}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     marginVertical: 8,
//     height: 45,
//     width: '100%',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     color: '#000',
//     fontSize: 16,
//   },
//   label: {
//     color: '#fff',
//     alignSelf: 'flex-start',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: '600',
//   },
//   dropdownWrapper: {
//     width: '100%',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   dropdownContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     height: 45,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   picker: {
//     color: '#000',
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#800080',
//     borderRadius: 25,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   loginButton: {
//     backgroundColor: '#800080',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default SignUpScreen;