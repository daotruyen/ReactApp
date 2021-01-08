import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Music = (props) => {
    //console.log(props)
    const navigation = useNavigation();
    return (
        <View style={styles.items}
        onStartShouldSetResponder={() => navigation.navigate('Details',props)}
        > 
            <View style={styles.poster}>
                <Image
                    style={styles.img}
                    source={{
                        uri: props.poster
                    }}
                />
            </View >
            <View style={styles.info}>
                <Text style={styles.title}>{props.title} </Text>
                <View>
                    <Text>{props.description}</Text>
                </View>
                
            </View>
        </View>
    );
}
export default Music;
const styles = StyleSheet.create({
    img:{
        width:100,
        height:100
    },
    items:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 30,
        padding:10,
        margin: 10,
        
    },
    title:{
        fontSize:18,
        fontWeight:'700',
    },
    poster:{
        marginRight: 20,
    },
    info:{
        flex:1,
        
    },
    description:{
        flexDirection:"row"
    }
});
