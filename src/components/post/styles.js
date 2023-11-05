import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    postContainer: {
        marginHorizontal : 20,
        marginTop        : 30
    },
    postImage: {
        width        : "100%",
        aspectRatio  : 3/2,
        resizeMode   : "cover",
        borderRadius : 10
    },
    postRoom: {
        marginVertical : 10,
        color          : "#5B5B5B"
    },
    postDescription: {
        fontSize   : 18,
        lineHeight : 26
    },
    postPrice: {
        fontSize       : 18,
        marginVertical : 10
    },
    postOldPrice: {
        color              : "#5B5B5B",
        textDecorationLine : "line-through"
    },
    postActualPrice: {
        fontWeight: "bold",
    },
    postTotalPrice: { 
        color              : "#5B5B5B",
        textDecorationLine : "underline"
    }
});

export default styles;