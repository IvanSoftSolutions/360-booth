import { Text, TouchableOpacity } from "react-native";

export default function CloseButton({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontSize: 30, color: "#D3D3D3"}}> X </Text>
        </TouchableOpacity>
    );
}