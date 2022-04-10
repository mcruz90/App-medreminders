import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React, {useState} from 'react'
import AppLoading from 'expo-app-loading';
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';
import ImagePickerComponent from "../components/ImagePickerComponent";
import callGoogleVisionAsync from "../components/helperFunctions.js"

const AddMedsScreen = ({ navigation, route }) => {
                  
    let [fontsLoaded] = useFonts({
      Quicksand_400Regular,
      Quicksand_600SemiBold,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return (
      <ScrollView>
      <View style={styles.container}>
  
        <View style={{ margin: 10, flexDirection: 'column'}}>
  
        <View>
          <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
        </View>

  
          <Text style={{fontFamily: 'Quicksand_600SemiBold', fontSize: 16}}>Set refill reminder when down to</Text>
  
          <View style={{ marginTop: 10, marginBottom: 10, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                    navigation.navigate('Reminders', { name: 'Jane' })}>
              <View style={{flex: 2.5, paddingLeft: 10}}>
              <TextInput placeholder='e.g. 7 days remaining' placeholderTextColor={'lightgrey'} keyboardType='numeric' style={{borderColor:'#c0c0c0'}}></TextInput>
              </View>
          </View>
  
          <View style={{ margin: 15, height: 60, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                          navigation.navigate('Reminders', { name: 'Jane' })}>
                    
                    
                    <TouchableOpacity style={{ marginRight: 5, height: 60, width: 120, borderRadius: 20, backgroundColor: '#0118B5', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                    navigation.navigate('ApptDetails', { name: 'Jane' })}>
                    <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >ADD</Text>
          
                    </TouchableOpacity>
  
                    
                    <TouchableOpacity style={{ marginLeft: 5, height: 60, width: 120, borderRadius: 20, backgroundColor: 'pink', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                    navigation.navigate('ApptDetails', { name: 'Jane' })}>
                    <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >RESET</Text>
              
                    </TouchableOpacity>
                      
                    
  
          </View>
          
  
        </View>
      </View>
      </ScrollView>
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
  

  export default AddMedsScreen;