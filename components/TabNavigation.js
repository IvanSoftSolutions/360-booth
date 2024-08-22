import * as React from 'react';
import { Image, Text, TouchableOpacity, FlatList, StyleSheet, View, useWindowDimensions, Touchable } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';

import Separator from './Separator';

const placeHolderImage = require ('../assets/placeholderImage.png');

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

const FirstRoute = ({navigation}) => (
    <FlatList
      data={data}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.eventContainer} 
          onPress={() => navigation.navigate('Event')}
        >
          <Image source={placeHolderImage} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
);



const SecondRoute = ({navigation}) => (
    <FlatList
      data={data}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.eventContainer} 
          onPress={() => navigation.navigate('Event')}
        >
          <Image source={placeHolderImage} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
);

const RenderScene = ({ route, navigation }) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute />;
    case 'second':
      return <SecondRoute navigation={navigation} />;
    default:
      return null;
  }
};

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

const renderTabBar = props => (
  <TabBar 
    {...props}
    activeColor='#000000'
    inactiveColor='#969696'
    indicatorStyle={{backgroundColor: 'red'}}
    style={{backgroundColor: '#D9D9D9'}}
  />
);

export default function TabNavigation({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Upcoming' },
    { key: 'second', title: 'Completed' },
  ]);

  return ( 
    <View style={[styles.tabViewContainer, {width: layout.width}]}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={ (props) => <RenderScene {...props} navigation={navigation} route={props.route} />}
        onIndexChange={setIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabViewContainer: {
    flex: 1, 
    paddingTop: 40, 
    maxHeight: 459,
  },
  eventContainer: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    backgroundColor: '#1E1E1E', 
  },
  image: {
    width: 150,
    height: 100,
    // borderRadius:20,
    resizeMode: 'contain'
  },
  infoContainer: {
    paddingLeft: 15,
  },
  eventTitle: {
    color: '#D3D3D3', 
    fontSize: 28,
    paddingBottom: 25,
  },
  eventDate: {
    color: '#5c5c5c', 
    fontSize: 18, 
  }
})