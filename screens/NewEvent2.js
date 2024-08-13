import React from 'react';
import { Switch, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faFilm } from '@fortawesome/free-solid-svg-icons/'


export default function NewEvent2({navigation}) {
  const [isEnabled, setIsEnabled] = React.useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={30} style={{color: "#D80303"}}/>
        </TouchableOpacity>
        <Text style={styles.textStep} >Step 2/4</Text>
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
            top: 63,
            left: 16,
            height: 5,
            width: '46%',
            backgroundColor: "#D80303",
            borderRadius: 15,
            alignSelf: 'flex-start',
          }} 
        />
        <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.formContainer}>
          <Text style={styles.textTitle}>Select Video Frame</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesomeIcon icon={faFilm} size={50} style={styles.iconLandscape} />
                <Text style={styles.textLabel}>Landscape</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesomeIcon icon={faFilm} size={50} style={styles.iconPortrait} />
                <Text style={styles.textLabel}>Portrait</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesomeIcon icon={faFilm} size={80} style={styles.iconSquare} />
                <Text style={[styles.textLabel, {paddingTop: 5}]}>Square</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 25}}>
            <Text style={styles.textLabel}>Ultra Wide Angle</Text>
            <Switch
              style={{marginTop: 15, marginLeft: 115}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
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
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15
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
    height: 145,
    width: 145,
    marginBottom: 25,
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