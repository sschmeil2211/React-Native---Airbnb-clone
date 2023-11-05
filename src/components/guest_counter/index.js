import React from "react";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const GuestsCounter = ( props ) => {

    const { guestClassification, guestAge } = props ?? {};
    
    const [guestCount, setGuestCount] = useState(0);

    const decreaseGuestCount = () => setGuestCount((prevCount) => Math.max(0, prevCount - 1));
    const increaseGuestCount = () => setGuestCount((prevCount) => prevCount + 1);

    return ( 
        <View style={styles.row}>

            <View>
                <Text style={styles.guestType}>{ guestClassification }</Text>
                <Text style={styles.guestAge}>{ guestAge }</Text>
            </View>

            <View style={styles.counter}>
                <Pressable 
                    onPress={ decreaseGuestCount } 
                    style={styles.button}
                >
                    <Text style={styles.itemButtom}>-</Text>
                </Pressable>

                <Text style={styles.count}>{guestCount}</Text>

                <Pressable 
                    onPress={ increaseGuestCount } 
                    style={styles.button}
                >
                    <Text style={styles.itemButtom}>+</Text>
                </Pressable>
            </View>
            
        </View> 
    );
};

export default GuestsCounter;