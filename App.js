
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import MapView from 'react-native-maps';
import AppLoading from 'expo-app-loading';
import HomeScreen from "./Screens/HomeScreen";
import RemindersScreen from "./Screens/RemindersScreen";
import CareTeamScreen from "./Screens/CareTeamScreen";
import MedDetailsScreen from './Screens/MedDetailsScreen';
import AddMedsScreen from './Screens/AddMedsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Health Reminders App'}}
        />
        
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="CareTeam" component={CareTeamScreen} />
        <Stack.Screen name="MedDetails" options={{ title: 'View All Medications'}} component={MedDetailsScreen} />
        <Stack.Screen name="AddMeds" 
          options={{ title: 'Add Medications'}} component={AddMedsScreen} />
        {/* 
          <Stack.Screen name="AddProviders" options={{ title: 'Add New Contact'}} component={AddProvidersScreen} />
          
          <Stack.Screen name="ApptDetails" options={{ title: 'Appointment Details'}} component={ApptDetailsScreen} />
          <Stack.Screen name="AmlodipineDetails" options={{ title: 'Amlodipine'}} component={AmlodipineScreen} />
        
        
        */}
        
      </Stack.Navigator>
    </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#e2e2e4',
  },

  heading: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#e2e2e4',
    color: '#35424a',
    textAlign: 'right'
  },

  content: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f3f3f5',
  },

  textcontent: {
    color: 'black',
    padding: 10
  },

  medcontent: {
    color: 'black',
  },
  medcontentLeft: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'left',
  },
  medcontentRight: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'right',
  },
  apptcontentLeft: {
    color: 'black',
    paddingBottom: 5,
    textAlign: 'left',
  },

  apptcontentRight: {
    color: 'black',
    paddingBottom: 5,
    textAlign: 'right',
  },
  contentLeft: {
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
  },
  contentRight: {
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 7,
  },
  buttonOpen: {
    backgroundColor: 'pink',
  },
  buttonCallClose: {
    backgroundColor: 'lawngreen',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
