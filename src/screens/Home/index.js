import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Fontisto from "react-native-vector-icons/Fontisto";

import styles from "./styles";

const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                    style={styles.searchButton}
                    onPress={() => navigation.navigate("Destination Search")}
                >
                    <Fontisto 
                        name="search"
                        size={25} 
                        color={"#F15454"}
                    />
                    <Text style={styles.buttonSearchLabel}>Where are you going?</Text>
            </Pressable>

            <ImageBackground 
                source={require("../../../assets/images/wallpaper.jpg")} 
                style={styles.imageBackground}
            >

                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn("Explore")}
                >
                    <Text style={styles.buttonLabel}>Explore nearby stay</Text>
                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;