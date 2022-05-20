
import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, {useState, useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";
import RemindersScreen from "./Screens/RemindersScreen";
import CareTeamScreen from "./Screens/CareTeamScreen";
import MedDetailsScreen from './Screens/MedDetailsScreen';
import PrescriptionScreen from './Screens/PrescriptionScreen';
import AddMedsScreen from './Screens/AddMedsScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Remote debugger']);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    schedulePushNotification();
  }, [])

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
          <Stack.Screen name="Prescription" component={PrescriptionScreen} />
        {/* 
          <Stack.Screen name="AddProviders" options={{ title: 'Add New Contact'}} component={AddProvidersScreen} />
          
          <Stack.Screen name="ApptDetails" options={{ title: 'Appointment Details'}} component={ApptDetailsScreen} />
          <Stack.Screen name="AmlodipineDetails" options={{ title: 'Amlodipine'}} component={AmlodipineScreen} />
        
        
        */}
        
        

      </Stack.Navigator>
    </NavigationContainer>

  );
}


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Due in 7 days 🔔 ",
      body: "You have prescriptions due for renewals",
      data: { data: 'goes here' }
    },
    trigger: { seconds: 60 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
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
