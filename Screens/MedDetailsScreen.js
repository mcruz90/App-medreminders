import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import React, {useState, useEffect, useMemo} from 'react'
import { Alert, Pressable, Modal, Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Linking, Touchable } from 'react-native';
import {db} from "../db/firebase"
import {collection, doc, getDocs} from 'firebase/firestore'
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message


const MedDetailsScreen = ({ navigation, route }) => {

  
  const [meds, setMeds] = useState([])
  const [medList, setMedList] = useState([])

      useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
        await fetchMeds();
      });

        return unsubscribe;
      }, []);

  const fetchMeds=async()=>{
        const response= await getDocs(collection(db, "meds"));
        response.forEach(item=>{
          console.log(typeof(meds))
          if (!meds.includes(item)) (
            setMeds(prevFiles => ([...prevFiles, {id: item.id, data: item.data()}])
          )
        )
      })
    }
  

  const medNames = meds.map((med)=> {
    
    return (<View key={med.data.name} style={{ margin: 15, paddingLeft: 10, height: 120, width: 300, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={{paddingTop: 10}} onPress={() =>
      navigation.navigate('Prescription')}>
      <View style={{flex: 2.5, paddingLeft: 10}}>
              
        <Text style={{color: 'black', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >{med.data.name}</Text>
        <Text style={{paddingTop: 4, paddingBottom: 4, color: 'darkgrey', fontSize: 12, fontFamily: 'Quicksand_400Regular'}} >{(med.data.directions).toLowerCase()}</Text>
        <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Prescribed by: {med.data.prescriber}</Text>
        <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 12}} >Filled on {med.data.DateFilled}</Text>
        <Text style={{color: 'darkgrey', fontFamily: 'Quicksand_400Regular', fontSize: 11}} >Reminder set for <Text style={{fontFamily:'Quicksand_600SemiBold'}}>{med.data.Reminder}</Text> days left</Text>
      </View>
      </TouchableOpacity>

      <View style={{flex: 1.1}}>
              <View style={{flexDirectin:'column', alignItems: 'center'}}>
                      <Text style={{fontFamily: 'Quicksand_600SemiBold', paddingRight: 20, paddingLeft: 10, paddingTop: 10, fontSize: 22}}>{(Number((med.data.quantity).slice(5,7))) - (Math.round(Math.abs((Date.now()) - (Date.parse(med.data.DateFilled))) / 86400000 ))}</Text>
                      <Text style={{fontFamily: 'Quicksand_400Regular', paddingRight: 20, paddingBottom: 10, paddingLeft: 12, fontSize: 12}}>days left</Text>
                      {(Number((med.data.quantity).slice(5,7))) - (Math.round(Math.abs((Date.now()) - (Date.parse(med.data.DateFilled))) / 86400000 )) < Number((med.data.Reminder)) &&
                        <Pressable style={{backgroundColor: 'pink', padding: 7, borderRadius: 10}} onPress={() => setModalVisible(true)}><Text style={{fontSize: 13}}>Refill now</Text></Pressable>
                        }
                </View>
        </View>
      </View>  )
        
                      })


    const [modalVisible, setModalVisible] = useState(false);

    return (
      <ScrollView>
      <View style={{ margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          
      {medNames}
  
              
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
  
          
  
         
         
         
  
         <View style={{ margin: 15, paddingLeft: 10, height: 50, width: 300, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <View>
                  <TouchableOpacity style={{ height: 50, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={() =>
                  navigation.navigate('AddMeds', { name: 'Jane' })}>
                   <Text style={{padding: 3, color: 'white', fontFamily: 'Quicksand_600SemiBold', fontSize: 18}} >ADD NEW PRESCRIPTION</Text>
            
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
  

  export default MedDetailsScreen;  