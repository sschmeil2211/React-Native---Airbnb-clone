import React from "react";
import { View, FlatList } from "react-native"; 

import styles from "./styles"; 
import Post from "../../../src/components/post"
import feed from "../../../assets/data/feed"; 

const SearchResultsScreen = (props) => {
    return (
        <View> 
            <FlatList
                data={feed}
                renderItem={({item}) => <Post post={item}/>}
            />
        </View>
    );
};

export default SearchResultsScreen;