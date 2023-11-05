import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 

import TabNavigator from './tab_navigator';
import HomeScreen from "../screens/Home"; 
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name={"Home"}
                    component={TabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{title: "Search your destination"}}
                />
                <Stack.Screen
                    name={"Guest"}
                    component={GuestsScreen}
                    options={{title: "How many people?"}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;