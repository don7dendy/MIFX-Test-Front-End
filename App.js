import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Shop from './pages/shop';

const Stack = createNativeStackNavigator();

export default class NavIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      setIndex: 1,
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Shop"
          >
          <Stack.Screen
            name="Shoes"
            component={Shop}
            options={{
              headerStyle: {
                backgroundColor: "#c0c5ce",
              },
              headerTitleStyle: {
                color: "#000",
              },
              headerLeft: () => (<View style={{marginRight:10}}>
                              <Icon name="arrow-left" size={20} color="#000" />
              </View>),
              headerRight: () => (<View style={{marginRight:10}}>
                            <Icon name="sliders" size={25} color="#000" />
            </View>),

            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  input: {
    color: 'black',
  },
});
