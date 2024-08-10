import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NewEvent({navigation}) {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [SMS, setSMS] = React.useState('');


  return (
    <View style={styles.mainContainer}>
        <Text style={styles.textStep} >Step 1/4</Text>
        <View style={{
            backgroundColor: "#575757",
            height: 5,
            width: '92%',
            alignSelf: 'center',
            borderRadius: 15
          }} 
        />
        <View style={{
            position: 'absolute',
            top: 38,
            left: 16,
            height: 5,
            width: '23%',
            backgroundColor: "#D80303",
            borderRadius: 15,
            alignSelf: 'flex-start',
          }} 
        />
        <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.formContainer}>
          <Text style={styles.textTitle}>Event Information</Text>
          <Text style={styles.textLabel}>Event Name</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={setName}
            value={name}
          />
          <Text style={styles.textLabel}>Event Date</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={setDate}
            value={date}
          />
          <Text style={styles.textLabel}>Location</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={setLocation}
            value={location}
          />
          <Text style={styles.textLabel}>Description</Text>
          <TextInput
            multiline 
            style={[styles.textInput, {height: 130}]}
            onChangeText={setDesc}
            value={desc}
          />
          <Text style={styles.textLabel}>Email Message</Text>
          <TextInput
            multiline 
            style={[styles.textInput, {height: 130}]}
            onChangeText={setEmail}
            value={email}
          />
          <Text style={styles.textLabel}>SMS Message</Text>
          <TextInput
            multiline 
            style={[styles.textInput, {height: 130}]}
            onChangeText={setSMS}
            value={SMS}
          />
          <View style={{ height: 40 }} />
        </ScrollView>
        <View style={styles.nextButton}  >
          <TouchableOpacity style={styles.nextButtonOpacity} 
            onPress={() => navigation.navigate('New Event 2')}
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
    paddingTop: 10,
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
    width: 300,
    height: 55,
    backgroundColor: '#D80303',
    borderRadius: 20,
    marginTop: 25,
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