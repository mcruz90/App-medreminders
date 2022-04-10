import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React, {useState} from 'react'
import AppLoading from 'expo-app-loading';
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';

const MedDetailsScreen = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    
    const userDate = '01/23/2022';
    const userDate2 = '02/13/2022';
  
    const dateFilled = new Date(userDate);
    const dateToday = new Date();
  
    const difference = (dateToday.getTime() - dateFilled.getTime());
  
    const daysDateFilled = Math.ceil(dateFilled.getTime() / (1000 * 3600 * 24))
  
    const days = Math.ceil(difference / (1000 * 3600 * 24)); 
  
    
    let [fontsLoaded] = useFonts({
      Quicksand_400Regular,
      Quicksand_600SemiBold,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return (
  
      <View style={{ margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          
  
        <View style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <View style={{flex: 2.5, paddingLeft: 10}}>
            
    
              <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >Metformin 500mg</Text>
              <Text style={{paddingTop: 4, paddingBottom: 4, color: 'darkgrey', fontFamily: 'Quicksand_400Regular'}} >Take two tablets twice daily</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Prescribed by: Dr. Feelgood</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Filled on {userDate}</Text>
              
  
            </View>
  
            <View style={{flex: 1.1}}>
              <View style={{flexDirectin:'column', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 24}}>{90 - days}</Text>
                    <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 12, fontSize: 12}}>days left</Text>
              </View>
            </View>
         </View>
  
  
              
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
  
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
  
                    <Text style={styles.modalText}>Call pharmacy to renew?</Text>
  
                    <View style={{flexDirection: 'column'}}>
                      
                      <Pressable
                        style={[styles.button, styles.buttonCallClose]}
                        onPress={() => Linking.openURL('tel:1234567890')}>
                        <Text style={styles.textStyle}>Call</Text>
                      </Pressable>
                      <Text> </Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Close</Text>
                      </Pressable>
                      
                    </View>
                  </View>
                </View>
              </Modal>
  
          
  
         
         <View style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
                    
            <View style={{flex: 2.5, paddingLeft: 10}}>
          
            <TouchableOpacity onPress={() =>
                  navigation.navigate('AmlodipineDetails', { name: 'Jane' })}> 
              <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >Amlodipine 10mg</Text>
              <Text style={{paddingTop: 4, paddingBottom: 4, color: 'darkgrey', fontFamily: 'Quicksand_400Regular'}} >Take one tablet each day</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Prescribed by: Dr. Ven Trickle</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Filled on {userDate}</Text>
              
  
              </TouchableOpacity>
            </View>
          
            
  
            <View style={{flex: 1.1}}>
  
  
              <View style={{flexDirection:'column', alignItems: 'center', borderRadius: 20}}>
                <Pressable style={{alignItems: 'center', backgroundColor: 'pink', borderRadius: 20}}onPress={() => setModalVisible(true)}>
                      <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 15, paddingTop: 10, fontSize: 24}}>{60 - days}</Text>
                      <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 15, fontSize: 11}}>days left</Text>
                </Pressable>
              </View>
  
            </View>
  
            <View style={{padding: 7}}><Text></Text></View>
         </View>
  
         <View style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <View style={{flex: 2.5, paddingLeft: 10}}>
            
    
              <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >Ramipril 5mg</Text>
              <Text style={{paddingTop: 4, paddingBottom: 4, color: 'darkgrey', fontFamily: 'Quicksand_400Regular'}} >Take one capsule each day</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Prescribed by: Dr. Ven Trickle</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Filled on {userDate}</Text>
              
  
            </View>
  
  
            
            <View style={{flex: 1.1}}>
              <View style={{flexDirectin:'column', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 24}}>{90 - days}</Text>
                    <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 12, fontSize: 12}}>days left</Text>
              </View>
            </View>
  
         </View>
  
         <View style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('Reminders', { name: 'Jane' })}>
            <View style={{flex: 2.5, paddingLeft: 10}}>
            
    
              <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >Cetirizine 20mg</Text>
              <Text style={{paddingTop: 4, paddingBottom: 4, color: 'darkgrey', fontFamily: 'Quicksand_400Regular'}} >Take one tablet each day as needed</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Prescribed by: Dr. Feelgood</Text>
              <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Filled on 03/02/2022</Text>
              
  
            </View>
  
  
            
            <View style={{flex: 1.1}}>
              <View style={{flexDirectin:'column', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 24}}>20</Text>
                    <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 15, paddingLeft: 12, fontSize: 12}}>days left</Text>
              </View>
            </View>
  
         </View>
         
  
         <View style={{ margin: 15, paddingLeft: 10, height: 50, width: 300, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                        navigation.navigate('Reminders', { name: 'Jane' })}>
                  <View>
                  <TouchableOpacity style={{ height: 50, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('AddMeds', { name: 'Jane' })}>
                   <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >ADD NEW MEDICATION</Text>
            
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
  

  export default MedDetailsScreen;  