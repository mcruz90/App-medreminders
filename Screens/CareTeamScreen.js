import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React from 'react';
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';

const CareTeamScreen = ({ navigation, route }) => {

    
    let handleOnPress = () => {
      Linking.openURL('tel:1234567890')
    }
  
    let handleOnPress2 = () => {
      Linking.openURL('tel:5555555555')
    }
  
    return (
  
      <View style={{ margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          
          <View style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <Image source={require('../assets/md.png')} style={{ flex: 1, width: 70, height: 70, alignContent: 'center'}} />
            <View style={{flex: 2}}>
              <Text style={{paddingLeft: 5, color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >Dr. Feelgood</Text>
              <Text style={{padding: 5, color: 'black', fontFamily: 'Quicksand_400Regular' }} >Family Doctor</Text>
  
              
  
            </View>
            <TouchableOpacity style={{ marginRight: 25, height: 30, width: 60, borderRadius: 20, backgroundColor: 'lawngreen', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={handleOnPress}>
                <Text style={{padding: 5, color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >CALL</Text>
            </TouchableOpacity>
          </View>
          
  
          <View style={{ margin: 10, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <Image source={require('../assets/meds.png')} style={{ flex: 1, width: 70, height: 70, marginRight: 5, alignContent: 'center'}} />
            <View style={{flex: 2}}>
              <Text style={{paddingLeft: 5, color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >123 Drug Store</Text>
              <Text style={{padding: 5, color: 'black', fontFamily: 'Quicksand_400Regular'}} >Pharmacy</Text>
              
            </View>
            <TouchableOpacity style={{ marginRight: 25, height: 30, width: 60, borderRadius: 20, backgroundColor: 'lawngreen', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={handleOnPress2}>
                <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >CALL</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ margin: 10, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <Image source={require('../assets/heart.png')} style={{ flex: 1, width: 70, height: 70, marginRight: 5, alignContent: 'center'}} />
            <View style={{flex: 2}}>
              <Text style={{paddingLeft: 5, color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >Dr. Ven Trickle</Text>
              <Text style={{padding: 5, color: 'black', fontFamily: 'Quicksand_400Regular'}} >Cardiologist</Text>
              
            </View>
  
            <TouchableOpacity style={{ marginRight: 25, height: 30, width: 60, borderRadius: 20, backgroundColor: 'lawngreen', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={handleOnPress2}>
                <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold' }} >CALL</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ margin: 15, paddingLeft: 10, height: 60, width: 300, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  <View>
                  <TouchableOpacity style={{ height: 60, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('AddProviders', { name: 'Jane' })}>
                   <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >ADD NEW CONTACT</Text>
            
                  </TouchableOpacity>
                    
                  </View>
  
                  
           </View>
  
        </View>
    );
  };


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
    map: {
      width: Dimensions.get('window').width*0.8,
      height: Dimensions.get('window').height*0.4,
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
  

  export default CareTeamScreen;