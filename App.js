import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import NewEvent from './screens/NewEvent';
import NewEvent2 from './screens/NewEvent2';

import CloseButton from './components/CloseButton';

function HomeScreen({navigation}) {
  return (
    <Home navigation={navigation} />
  );
}

function CreateEvent({navigation}) {
  return (
    <NewEvent navigation={navigation} />
  );
}

function NewEvent_2({navigation}) {
  return (
    <NewEvent2 navigation={navigation} />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Create Event" component={CreateEvent}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerLeft: () => (
              <CloseButton navigation={navigation} />
            ),
            headerBackTitleStyle: {
              fontSize:30,
            },
            headerStyle: {
              backgroundColor: "#D80303",
            },
            headerTintColor: "#D3D3D3",
            headerTitleStyle: {
              fontSize: 18,
            }
          })}
        />
        <Stack.Screen name="New Event 2" component={NewEvent_2}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerLeft: () => (
              <CloseButton navigation={navigation} />
            ),
            headerBackTitleStyle: {
              fontSize:30,
            },
            headerStyle: {
              backgroundColor: "#D80303",
            },
            headerTintColor: "#D3D3D3",
            headerTitleStyle: {
              fontSize: 18,
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
