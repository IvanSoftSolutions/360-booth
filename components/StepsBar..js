import { StyleSheet, Text, View } from 'react-native';

import BackButton from "./BackButton";

export default function StepsBar({navigation, text, width}) {
    return (
        <View>
            <BackButton navigation={navigation} />
            <Text style={styles.textStep} >{text}</Text>
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
                width: width,
                backgroundColor: "#D80303",
                borderRadius: 15,
                alignSelf: 'flex-start',
            }} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStep: {
        fontSize: 18,
        color: '#D3D3D3',
        paddingTop: 35,
        paddingRight: 15,
        paddingBottom: 10,
        alignSelf: 'flex-end',
      },
})
