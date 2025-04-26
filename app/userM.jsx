import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function AdminPanel() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Xebia.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.topCurve}>
            {/* Home Icon */}
            <TouchableOpacity style={styles.homeIcon}>
              <Ionicons name="home" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.headerText}>USER MANAGEMENT</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="user-plus" size={16} color="#000" />
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="users" size={16} color="#000" />
            <Text style={styles.buttonText}>Add Bulk User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="edit" size={18} color="#000" />
            <Text style={styles.buttonText}>Modify User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="trash-bin-outline" size={18} color="#000" />
            <Text style={styles.buttonText}>Delete User</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 120,
  },
  topCurve: {
    backgroundColor: '#800080',
    width: '100%',
    height: 190,
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  homeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 5,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    gap: 10,
    elevation: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textTransform: 'capitalize',
  },
});
