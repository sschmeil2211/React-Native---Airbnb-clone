import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection     : "row",
        justifyContent    : "space-between",
        paddingVertical   : 20,
        marginHorizontal  : 20,
        borderBottomWidth : 1,
        borderColor       : "lightgrey"
    },
    guestType: {
        fontWeight: "bold"
    },
    guestAge: {
        color: "#8D8D8D"
    },
    counter: {
        flexDirection : "row", 
        alignItems    : "center"
    },
    button: {
        borderWidth    : 1,
        width          : 30,
        height         : 30,
        borderRadius   : 15,
        borderColor    : "#676767",
        justifyContent : "center",
        alignItems     : "center"
    },
    count: {
        marginHorizontal : 20,
        fontSize         : 15
    },
    itemButtom: {
        fontSize : 20,
        color    : "#5D5D5D"
    }
});

export default styles;