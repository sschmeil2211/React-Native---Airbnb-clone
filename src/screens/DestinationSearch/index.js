import React from "react";
import { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native"; 
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";  
import searchResults from "../../../assets/data/search";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles.contaienr}>  
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <Pressable 
                        onPress={() => navigation.navigate("Guest")}
                        style={styles.row}
                    >
                        <View style={styles.iconContainer}>
                            <Entypo 
                                name={"location-pin"}
                                size={36}
                            />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;