import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,Dimensions, SafeAreaView} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const DetailMusic = ({navigation,route}) => {
    const props = route.params;
    return (
        <SafeAreaView>
      <View>
          <View>
              <Text style={styles.goBack} onPress={() => navigation.goBack()}>Goback</Text>
              <Text style={styles.header}>Play</Text></View>
        <Image
            style={styles.img}
            source={{
                uri: props.poster
            }}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      </SafeAreaView>
    );
  }

export default DetailMusic;
const styles = StyleSheet.create({
    img:{
        //flex:1,
        width:SLIDER_WIDTH,
        height:SLIDER_WIDTH
    },
    header:{
        fontSize:20,
        textAlign:'center',
        backgroundColor:"#51A9FF",
        padding: 10,
    },
    goBack:{
        fontSize:18,
        fontWeight:'400',
        position:'absolute',
        zIndex:1,
        padding:10
    },
    title:{
        padding:10,
        fontSize:21,
        fontWeight:'700',
    },
  });
