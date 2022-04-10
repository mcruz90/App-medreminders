import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';

const RemindersScreen = ({ navigation, RemindersScreen }) => {

    let [fontsLoaded] = useFonts({
      Quicksand_400Regular,
      Quicksand_600SemiBold,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return (
  
      <View style={styles.container}>
  
        <View style={{ margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                
          <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingBottom: 10, fontSize: 24}}>Medication renewals</Text>
  
                <View style={{ margin: 5, paddingLeft: 10, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , paddingRight: 15}}>
                
                            <Text style={styles.contentLeft}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Metformin 500mg</Text></Text>
                            <Text style={styles.contentRight}><Text style={{fontFamily: 'Quicksand_400Regular'}}>36 days left</Text></Text>
          
                    </View>
                  </View>
                </View>
  
                <View style={{ margin: 5, paddingLeft: 10, width: 300, borderRadius: 20, backgroundColor: 'pink', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , paddingRight: 15}}>
                
                            <Text style={styles.contentLeft}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Amlodipine 10mg</Text></Text>
                            <Text style={styles.contentRight}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>6 days left</Text></Text>
          
                    </View>
                  </View>
                </View>
  
                <View style={{ margin: 5, paddingLeft: 10, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , paddingRight: 15}}>
                
                            <Text style={styles.contentLeft}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Ramipril 5mg</Text></Text>
                            <Text style={styles.contentRight}><Text style={{fontFamily: 'Quicksand_400Regular'}}>36 days left</Text></Text>
          
                    </View>
                  </View>
                </View>
  
                
  
                <View style={{ margin: 15, height: 40, width: 300, borderRadius: 20, backgroundColor: '#006CDC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  <View>
                  <TouchableOpacity style={{ height: 40, width: 300, borderRadius: 20, backgroundColor: '#006CDC', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('MedDetails', { name: 'Jane' })}>
                   <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >VIEW ALL</Text>
            
                  </TouchableOpacity>
                    
                  </View>
                </View>
  
  
                <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingBottom: 10, fontSize: 18}}>Appointments</Text>
  
                <View style={{ margin: 5, paddingLeft: 10, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                <View style={{flexDirectin:'column'}}>
                    <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 18}}>Apr 11</Text>
                    <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 12}}>9:30am</Text>
                  </View>
  
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , paddingRight: 15}}>
  
                            <Text style={styles.contentLeft}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Dr. Feelgood</Text></Text>
                            
                            <TouchableOpacity onPress={() => navigation.navigate('ApptDetails', { name: 'Jane' })}>
                            <Text style={styles.contentRight}><Text style={{fontFamily: 'Quicksand_600SemiBold'}} >Details</Text></Text>
                            </TouchableOpacity>
  
                    </View>
                  </View>
                </View>
  
                <View style={{ margin: 5, paddingLeft: 10, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  <View style={{flexDirectin:'column'}}>
                    <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 18}}>Apr 20</Text>
                    <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 12}}>7:30am</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , paddingRight: 15}}>
  
                            <Text style={styles.apptcontentLeft}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Bloodwork</Text></Text>
                            <Text style={styles.apptcontentRight}><Text style={{fontFamily: 'Quicksand_600SemiBold'}}>Details</Text></Text>
  
                    </View>
                  </View>
                </View>
  
  
                <View style={{ margin: 15, paddingLeft: 10, height: 50, width: 300, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  
                  <View>
                  <TouchableOpacity style={{ height: 50, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('ApptDetails', { name: 'Jane' })}>
                   <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold'}} >VIEW ALL</Text>
            
                  </TouchableOpacity>
                    
                  </View>
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
  

  export default RemindersScreen;