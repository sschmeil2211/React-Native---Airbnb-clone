import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles" 
import GuestsCounter from "../../components/guest_counter"; 

const GuestsScreen = ( props ) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View>
                <GuestsCounter
                    guestClassification="Adult"
                    guestAge="Ages 13 or above"
                />
                <GuestsCounter
                    guestClassification="Children"
                    guestAge="Ages 2-12"
                />
                <GuestsCounter
                    guestClassification="Infants"
                    guestAge="Under 2"
                />
            </View>
 
            <Pressable 
                onPress={() => navigation.navigate("Home")}
                style={styles.buttonSearch}
            >
                <Text style={styles.buttonSearchText}>Search</Text>
            </Pressable> 

        </View>
    );
};

export default GuestsScreen;