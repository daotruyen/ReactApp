import React ,{ useState}from 'react';
import { View, Text ,StyleSheet,Image,Dimensions, SafeAreaView,Button} from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Slider from '@react-native-community/slider'
const SLIDER_WIDTH = Dimensions.get('window').width;
const DetailMusic = ({navigation,route}) => {
  const [isPlaying, setIsPlaying] = useState(false);
    const props = route.params;
    return (
        <SafeAreaView>
    <View>
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
      <View style={styles.controlsContainer}>
        <View style={styles.func}>
          <Image style={{width:50,height:50}} source ={require('../data/download.png')}/>
          <Image style={{width:50,height:50}} source ={require('../data/download.jpeg')}/>
          <Image style={{width:50,height:50}} source ={require('../data/images.png')}/>
        </View>
      <Slider
         style={styles.progressBar}
         minimumValue={0}
         maximumValue={1}
         value={0}
         minimumTrackTintColor="#111000"
         maximumTrackTintColor="#000000"
         //onSlidingStart={slidingStarted}
         //onSlidingComplete={slidingCompleted}
         thumbTintColor="#000"
       />
       
        </View>
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
    controlsContainer: {
      flex: 0.45,
      justifyContent: 'flex-start',
    },
    progressBar: {
      height: 20,
      paddingBottom: 90,
      paddingTop:50
    },
    func:{flexDirection:'row',
  padding:20,
  justifyContent:'space-around'}
  });
