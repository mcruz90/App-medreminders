import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('Please add an image');

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

  const textArray = text.split('\n')

  return (
    <View style={{flex: 0.9, flexDirection: 'column', justifyContent: 'center'}}>

    <View style={{alignItems: 'center', padding: 10}}>
      <TouchableOpacity style={{ height: 120, width: 240, borderRadius: 20, backgroundColor: '#006CDC', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onPress={pickImage}>
            <Image source={require('../assets/list.png')} style={{ width: 60, height: 60, alignContent: 'center'}} />
            <Text style={{padding: 5, color: 'white', fontFamily: 'Quicksand_600SemiBold', textAlign: 'center'}} >UPLOAD PRESCRIPTION IMAGE</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, resizeMode:"contain" }}
        />
      )}
      </View>

      {textArray.length > 1 && (
        <View>
          
            <Text>{ 'Medication name: ' + textArray[9]} </Text>

            <Text> {textArray[11]} </Text>
            <Text>{ textArray.slice(16,18)}</Text>
            <Text>{'Pharmacy ' + textArray[6] } </Text>
            <Text>{'Prescriber: ' + textArray[24] }</Text>
            <Text>{textArray[5]} </Text>
            <Text>{'Date filled: ' + textArray[25]}</Text>
          
        </View>
      )}
    
    </View>
  );
}
export default ImagePickerComponent;