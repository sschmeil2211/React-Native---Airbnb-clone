import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent : "space-between", 
        height         : "100%"
    }, 
    buttonSearch: {
        marginBottom     : 20,
        backgroundColor  : "#F15454",
        alignItems       : "center",
        justifyContent   : "center",
        height           : 50,
        marginHorizontal : 20,
        borderRadius     : 10
    },
    buttonSearchText: {
        fontSize   : 20,
        color      : "white",
        fontWeight : "bold",
    }
});

export default styles;