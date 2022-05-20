import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (

  
      <View style={{backgroundColor: 'white', flex: 0.9, flexDirection: 'column', justifyContent: 'center'}}>
  
        <View style={{backgroundColor: 'white', margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          
          <TouchableOpacity style={{ height: 120, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'reminders' })}>
            <Image source={require('../assets/list.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >REMINDERS</Text>
            
          </TouchableOpacity>
  
          <TouchableOpacity style={{ height: 120, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('CareTeam', { name: 'care' })}>
            <Image source={require('../assets/heart.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >CARE TEAM</Text>
          </TouchableOpacity>
  
        </View>
  
        <View style={{backgroundColor: 'white', margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          
          <TouchableOpacity style={{ height: 120, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Reminders' })}>
            <Image source={require('../assets/folder.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >PROFILE</Text>
            
          </TouchableOpacity>
  
          <TouchableOpacity style={{ height: 120, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('CareTeam', { name: 'reminders' })}>
            <Image source={require('../assets/settings.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >SETTINGS</Text>
          </TouchableOpacity>
  
        </View>
        </View>
  
    );
  };

export default HomeScreen;