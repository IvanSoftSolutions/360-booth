import { View } from "react-native";

export default function Separator() {
    return (
        <View
            style = {{
                backgroundColor: '#575757',
                height: 0.5,
                width: '92%',
                alignSelf: 'center'
            }}
        />
    );
}