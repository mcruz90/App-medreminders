import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, useColorScheme, Alert } from 'react-native';
import {db} from '../db/firebase'
import {collection, addDoc} from 'firebase/firestore'
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Setting a timer for a long period of time']);
LogBox.ignoreLogs(['Remote debugger']);

function ImagePickerComponent({ navigation, onSubmit, childToParent, setChildToParent }) {


  const [image, setImage] = useState(null);
  const [text, setText] = useState('Please add an image');
  const [medRemind, setMedRemind] = useState("7");


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true, //return base64 data.
      //this will allow the Vision API to read this image.
    });
    if (!result.cancelled) { //if the user submits an image,
      setImage(result.uri);
      setText("Loading..");
      const responseData = await onSubmit(result.base64);
      setText(responseData.text); 
    }
  };

  const textArray = text.split('\n');
  
  const medName = textArray[9];
  const medQty = textArray[14];
  const medDir = textArray[15];
  const medPharmTel = textArray[6];
  const medPrescriber = textArray[22];
  const medRefills = textArray[5];
  const medDateFilled = textArray[23];
  const medReminder = medRemind;
  const medRx = textArray[4];

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "meds"), {
        name: medName,
        quantity: medQty,
        directions: medDir,
        pharmTel: medPharmTel,
        prescriber: medPrescriber,
        Refills: medRefills,
        DateFilled: medDateFilled,
        Reminder: medReminder,
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Prescription added!')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const showConfirmDialog = () => {
    return Alert.alert(
      "CONFIRM",
      "Are you sure you want to add this prescription?",
      [
        {
          text: "Yes",
          onPress: () => {
            sendData();
            setChildToParent(true)
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={{flex: 0.9, flexDirection: 'column', justifyContent: 'center'}}>

    <View style={{alignItems: 'center', padding: 10}}>


      <TouchableOpacity style={{ height: 120, width: 240, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={pickImage}>
            <Image source={require('../assets/meds.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold', textAlign: 'center'}} >UPLOAD PRESCRIPTION IMAGE FROM PHONE</Text>
      </TouchableOpacity>

      <View style={{padding: 5}}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, resizeMode:"contain" }}
        />
      )}
      
      </View>


      <Text style={{fontFamily: 'Quicksand_600SemiBold', fontSize: 16}}>Set refill reminder when down to</Text>
        
        <View style={{ marginTop: 20, marginBottom: 20, width: 120, height: 50, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 2.5, paddingLeft: 10}}>
            <TextInput placeholder='7' placeholderTextColor={'lightgrey'} onChangeText={newText => setMedRemind(newText)} keyboardType='numeric' style={{paddingLeft: 40, borderColor:'#c0c0c0', fontSize: 20, justifyContent: 'center'}}></TextInput> 
            <Text style={{paddingLeft: 5}}>days remaining</Text>
            </View>
        </View>

      <TouchableOpacity style={{ height: 60, width: 120, borderRadius: 20, backgroundColor: 'skyblue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={showConfirmDialog}>
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold', textAlign: 'center'}} >ADD PRESCRIPTION</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  );
};

export default ImagePickerComponent;