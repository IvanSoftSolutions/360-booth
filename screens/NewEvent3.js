import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import StepsBar from '../components/StepsBar.';

export default function NewEvent3({navigation}) {
  const [time, setTime] = React.useState(3.5);
  const [countdown, setCountdown] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [value1, setValue1] = React.useState('high');
  const [items1, setItems1] = React.useState([
    {label: 'High', value: 'high'},
    {label: 'Medium', value: 'medium'},
    {label: 'Low', value: 'low'}
  ]);
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState('front');
  const [items2, setItems2] = React.useState([
    {label: 'Front', value: 'front'},
    {label: 'Back', value: 'back'},
  ]);
  return (
    <View style={styles.mainContainer}>
        <StepsBar navigation={navigation} text={'Step 3/4'} width={'69%'} />
        <View style={styles.formContainer}>
          <Text style={styles.textTitle}>Settings Video, Camera, Audio</Text>
          <Text style={styles.textLabel}>Video Quality</Text>
          <DropDownPicker 
            open={open}
            value={value1}
            items={items1}
            setOpen={setOpen}
            setValue={setValue1}
            setItems={setItems1}
            style={{
              borderWidth: 0,
              borderRadius: 10,
              marginBottom: 20,
              backgroundColor: '#3b3b3b',
            }}
            labelStyle={{
              color: '#D3D3D3',
              fontSize: 25,
              padding: 10,
            }}
            textStyle={{
              fontSize: 25
            }}
          />
          <View style={{ flexDirection: 'row' }}> 
            <View style={{ width: '45%', marginRight: 35}}>
              <Text style={styles.textLabel}>Record Time</Text>
              <TextInput 
                style={styles.textInput}
                onChangeText={setTime}
                value={time}
              />
            </View>
            <View style={{ width: '45%'}}>
              <Text style={styles.textLabel}>Countdown</Text>
              <TextInput 
                style={styles.textInput}
                onChangeText={setCountdown}
                value={countdown}
              />
            </View> 
          </View>
          <Text style={styles.textLabel}>Camera</Text>
          <DropDownPicker 
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            style={{
              borderWidth: 0,
              borderRadius: 10,
              marginBottom: 20,
              backgroundColor: '#3b3b3b',
            }}
            labelStyle={{
              color: '#D3D3D3',
              fontSize: 25,
              padding: 10,
            }}
            textStyle={{
              fontSize: 25
            }}
          />
          <Text style={styles.textLabel}>Audio File</Text>
          <TextInput 
            style={styles.textInput}
            // onChangeText={setName}
            // value={name}
          />
          {/* <View style={{ height: 40 }} /> */}
        </View>
        <View style={styles.nextButton}  >
          <TouchableOpacity style={styles.nextButtonOpacity} 
            onPress={() => navigation.navigate('New Event 4')}
          >
            <Text style={styles.textNext}>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
  },
  textStep: {
    fontSize: 18,
    color: '#D3D3D3',
    paddingTop: 35,
    paddingRight: 15,
    paddingBottom: 10,
    alignSelf: 'flex-end',
  },
  formContainer: {
    height: 500,
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16, 
  },
  textTitle: {
    fontSize: 30,
    color: "#D3D3D3",
    paddingBottom: 20,
  },
  textLabel: {
    fontSize: 22,
    color: '#D3D3D3',
    paddingBottom: 10,
  },
  textInput: {
    fontSize: 25,
    color: '#D3D3D3',
    height: 50,
    width: '100%',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#3b3b3b',
    borderRadius: 10,
  },
  textNext: {
    fontSize: 20,
    color: "#D3D3D3",
  },
  nextButton: {
    width: '80%',
    height: 55,
    backgroundColor: '#D80303',
    borderRadius: 20,
    marginTop: 90,
    marginBottom: 40,
    alignSelf: 'center',
  },
  nextButtonOpacity: {
    width: 300, 
    height: 55,
    alignItems: 'center', 
    justifyContent: 'center',
  },
});