import React from "react";
import { View, Image, Text } from "react-native"; 

import styles from "./styles";

const Post = (props) => {

    const post = props.post; 

    return (
        <View style={styles.postContainer}>

            <Image
                style={styles.postImage}
                source={{uri: post.image}}
            />

            <Text style={styles.postRoom}> {post.room} </Text>
            <Text 
                style={styles.postDescription} 
                numberOfLines={2}
            >
                {post.type}. {post.title}
            </Text>

            <Text style={styles.postPrice}>
                <Text style={styles.postOldPrice}>${post.oldPrice}</Text>
                <Text style={styles.postActualPrice}>  ${post.newPrice} </Text>
                / night
            </Text>

            <Text style={styles.postTotalPrice}>${post.totalPrice} total</Text>
        </View>
    );
};

export default Post;