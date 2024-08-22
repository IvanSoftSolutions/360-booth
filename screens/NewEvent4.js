import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import StepsBar from '../components/StepsBar.';

export default function NewEvent2({navigation}) {
  const [open, setOpen] = React.useState(false);
  const [value1, setValue1] = React.useState(60);
  const [items1, setItems1] = React.useState([
    {label: '60 fps', value: 60},
    {label: '120 fps', value: 120},
    {label: '240 fps', value: 240}
  ]);
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState(1/2);
  const [items2, setItems2] = React.useState([
    {label: '1/2', value: 1/2},
    {label: '1/3', value: 1/3},
    {label: '1/4', value: 1/4},
    {label: '1/5', value: 1/5},
  ]);

  return (
    <View style={styles.mainContainer}>
        <StepsBar navigation={navigation} text={'Step 4/4'} width={'92%'}/>
        <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.formContainer}>
          <Text style={styles.textTitle}>Select General</Text>
          <Text style={styles.textLabel}>Overlay</Text>
          <TouchableOpacity style={styles.iconContainer}>
              <Text style={[styles.textLabel, {paddingTop: 5}]}>Tap to add</Text>
          </TouchableOpacity>
          <Text style={styles.textLabel}>Event Overlay Video</Text>
          <TouchableOpacity style={styles.iconContainer}>
              <Text style={[styles.textLabel, {paddingTop: 5}]}>Tap to add</Text>
          </TouchableOpacity>
          <Text style={styles.textLabel}>Slomo</Text>
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
              // marginBottom: 20,
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
          <Text style={styles.textLabel}>Boomerang speed</Text>
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
              // marginBottom: 20,
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
          <View style={{ height: 40 }} />
        </ScrollView>
        <View style={styles.nextButton}  >
          <TouchableOpacity style={styles.nextButtonOpacity} 
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.textNext}>Create</Text>
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
  formContainer: {
    height: 500,
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16, 
  },
  textTitle: {
    fontSize: 30,
    color: "#D3D3D3",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
  }, 
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 355,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#000000"
  },
  iconLandscape: {
    transform: [{scaleX: 2}, {scaleY: 1.25}],
    color: "#3b3b3b",
  },
  iconPortrait: {
    transform: [ {scaleX: 1.25}, {scaleY: 1.75}],
    color: "#3b3b3b",
  },
  iconSquare: {
    color: "#3b3b3b",
  },
  textLabel: {
    fontSize: 22,
    color: '#D3D3D3',
    paddingTop: 20,
    paddingBottom: 10,
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