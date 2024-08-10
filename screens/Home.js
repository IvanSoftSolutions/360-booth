import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

import OngoingEvent from "../components/OngoingEvent";
import TabNavigation from "../components/TabNavigation";

const PlaceHolderImage = require("../assets/placeholderImage.png");

export default function Home({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <OngoingEvent placeholderImageSource={PlaceHolderImage} />
            <TabNavigation navigation={navigation} />
            <View style={styles.newEventIcon} >    
                <TouchableOpacity onPress={() => navigation.navigate('Create Event')} >
                    <FontAwesomeIcon icon={faPlus} size={30} style={{color: "#D3D3D3"}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
    },
    newEventIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#D80303',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });