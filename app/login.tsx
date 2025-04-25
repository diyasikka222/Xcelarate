import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [accessLevel, setAccessLevel] = useState('1');
  
  const handleEmailChange = (text: string) => {
    setEmail(text);
  
    // Example logic: Adjust based on your actual access rules
    if (text.includes('@admin.com')) {
      setAccessLevel('Admin');
    } else if (text.includes('@manager.com')) {
      setAccessLevel('Manager');
    } else if (text.includes('@user.com')) {
      setAccessLevel('User');
    } else {
      setAccessLevel('');
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Example: Log to console (replace with real auth logic)
    console.log('Logging in with:', { email, password, rememberMe });

    // Reset form (optional)
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (  
    <ImageBackground
      source={require('../assets/images/0001.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Xcelarate</Text>
        <View style={styles.bottomRight}>
            <Text style={styles.subtitle}>Powered By </Text>
            <Image
                source={require('../assets/images/Xebia.png')}
                style={styles.logo}
        />
        </View>
        <Text style={styles.loginHeader}>Log In</Text>
        <TextInput
           style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="#999"
            value={email}
        onChangeText={handleEmailChange}
        />
        {/* <TextInput
            style={[styles.input, { backgroundColor: '#f0f0f0' }]}
            placeholder="Access Level"
            placeholderTextColor="#999"
            value={accessLevel}
            editable={false}
        /> */}
        {/* <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Access Level</Text>
        <Picker
            selectedValue={accessLevel}
            onValueChange={(itemValue) => setAccessLevel(itemValue)}
            style={styles.picker}
            dropdownIconColor="#fff"
        >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
        </View> */}
        <View style={styles.pickerContainer}>
  <Text style={styles.pickerLabel}>Access Level</Text>
  <View style={styles.pickerWrapper}>
    <Picker
      selectedValue={accessLevel}
      onValueChange={(itemValue) => setAccessLevel(itemValue)}
      style={styles.picker}
      dropdownIconColor="#000" // Optional: set based on theme
    >
      <Picker.Item label="Pick Access Level" value="" />
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="4" />
      <Picker.Item label="5" value="5" />
    </Picker>
  </View>
</View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.forgotPasswordWrapper}>
  <TouchableOpacity onPress={() => console.log('Forgot Password')}>
    <Text numberOfLines={1} style={styles.forgotPassword}>
      Forgot Your Password?
    </Text>
  </TouchableOpacity>
</View>

        <View style={styles.checkboxRow}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.checkboxContainer}
          >
            <View
              style={[
                styles.customCheckbox,
                rememberMe && styles.checkedCheckbox,
              ]}
            >
              {rememberMe && <Text style={styles.checkboxTick}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember for 30 Days</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.newAccount}>
          New Here?{' '}
          <Text style={styles.link} onPress={() => router.push('/signup')}>
            Create an Account
          </Text>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    height: 45,
    marginBottom: 15,
    overflow: 'hidden',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  pickerLabel: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    color: '#fff',
    backgroundColor: 'rgba(161, 138, 138, 0.1)',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
    textAlign: 'center',
  },
  bottomRight: {
    position: 'absolute',
   bottom: 20,
   right: 20,
   flexDirection: 'row',         // to keep text and image in a row
   alignItems: 'center', 
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
  },
  loginHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop: 40
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff',
  },
  forgotPasswordWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize:14,
    paddingRight: 5,
    color: '#FFFFFF',
    marginBottom: 2,
    textAlign: 'right',
    width: '100%',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  loginButton: {
    backgroundColor: '#740968',
    borderRadius: 50,
    paddingVertical: 13,
    paddingHorizontal: 40,
    marginBottom: 15,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '101%',
  },
  checkboxContainer: {
    marginRight: 8,
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#007bff',
  },
  checkboxTick: {
    color: '#fff',
    fontSize: 14,
  },
  accessLabel: {
    color: '#fff',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
  }, 
  checkboxLabel: {
    fontSize: 14,
    flexShrink: 1,
    flexWrap: 'wrap',
    marginLeft: 1,
    width: '80%',
    color: '#FFFFFF',
  },
  newAccount: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'center',
  },
  link: {
    color: 'white ',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;