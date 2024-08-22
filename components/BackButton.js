import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faFilm } from '@fortawesome/free-solid-svg-icons/'

export default function BackButton({navigation}){
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={30} style={{color: "#D80303"}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15
      },
})