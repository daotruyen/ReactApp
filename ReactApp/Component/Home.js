import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView,StyleSheet,Image, ActivityIndicator,FlatList, RefreshControl} from 'react-native';
import Music from './Music'
const ranDom = (tracks) =>{
    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
    return tracks
}
const Home = () =>  {

    //https://gist.githubusercontent.com/daotruyen/f99fa416f5816adcb27736fb44203ca6/raw/18021d95393c1a921926bfbe35521899b0f39fed/music.json
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [refreshing,setRefreshing] = useState(false);
    
    useEffect(()=>{   
        console.log('4')
        callApi()
      } , []);
    callApi = () =>{
        fetch('https://gist.githubusercontent.com/daotruyen/f99fa416f5816adcb27736fb44203ca6/raw/18021d95393c1a921926bfbe35521899b0f39fed/music.json')
        .then((response) => response.json())
        .then((responseJson) => {
            const temp = ranDom(responseJson.tracks)
            setTracks(temp)
            
            //console.log(responseJson)
            //console.log(responseJson.tracks)
            setLoading(false)
            //setRefreshing(false)
            console.log('2');
        })
        .catch( error => {
          console.error(error,);
        });
    }
    onRefresh = () => {
        setRefreshing(true),
        callApi()
        setTimeout(() => setRefreshing(false),100)
        console.log('3')
    }

    console.log('1');
    if(loading){
        return(
            <View>
                <ActivityIndicator/>   
            </View>
        )
    }
    return (
    <View>
        <Text style={styles.header}>List music</Text>
          <FlatList
            data={tracks}
            renderItem={({item})=>( 
                <Music
                    title={item.title.s}
                    poster={item.poster.s}
                    description={item.description.s}
                />
                )}
            keyExtractor={item=>(item.id.s)}
            refreshControl={
                <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh}
                 />}
                
          />
          
    
    </View>
      
    );
  
}
export default Home;
const styles = StyleSheet.create({
  header:{
      fontSize:20,
      textAlign:'center',
      backgroundColor:"#51A9FF",
      padding: 10,
  }
});