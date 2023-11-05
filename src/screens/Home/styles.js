import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageBackground: {
        width          : "100%",
        height         : "100%",  
        justifyContent : "center", 
    },
    searchButton: {
        backgroundColor  : "#FFF", 
        height           : 50,
        width            : Dimensions.get("screen").width - 20,
        borderRadius     : 30, 
        marginHorizontal : 10,
        flexDirection    : "row",
        justifyContent   : "center",
        alignItems       : "center",
        position         : "absolute",
        top              : 40,
        zIndex           : 100
    },
    buttonSearchLabel: {
        fontSize   : 16,
        fontWeight : "bold"
    },
    title: {
        fontSize   : 80,
        fontWeight : "bold",
        color      : "white",
        width      : "70%",
        marginLeft : 25
    },
    button: {
        backgroundColor : "#FFF",
        width           : 200,
        height          : 40,
        borderRadius    : 10,
        marginLeft      : 25,
        justifyContent  : "center",
        alignItems      : "center"
    },
    buttonLabel: {
        fontSize   : 16,
        fontWeight : "bold"
    }
});

export default styles;