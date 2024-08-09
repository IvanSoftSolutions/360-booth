import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

export default function OngoingEvent ({ placeholderImageSource }) {

    const data = [
        {
            name: 'Event1',
            date: 'Date1',
        },
        {
            name: 'Event2',
            date: 'Date2',
        },
        {
            name: 'Event3',
            date: 'Date3',
        },
    ]

    return (
        <View style={styles.ongoingContainer} >
            <Text style={styles.ongoingText} >Ongoing</Text>
            <Carousel
                width={350}
                height={200}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Image source={placeholderImageSource} style={styles.image} />
                        <View style={styles.eventInfo}>
                            <Text style={styles.eventText}>
                                {item.name}
                            </Text>
                            <Text style={styles.eventText}>
                                {item.date}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 200,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    ongoingContainer: {
        flex: 1,
        paddingTop: 60,
        maxHeight: 305
    },
    ongoingText: {
        fontSize: 22,
        color: '#D3D3D3',
        paddingBottom: 25,
    },
    eventInfo: {
        position: 'absolute',
        top: 140,
        left: 10,
    },
    eventText : {
        fontSize: 22,
        color: '#D3D3D3',
        paddingBottom: 10,
    }
});