import React, {useState, useEffect , Component , Fragment} from 'react';
import {
  TouchableOpacity,
  Modal,
  StyleSheet,
  View,
  Image,
  Alert,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToFonts as wf,
  heightPercentageToFonts as hf,
} from 'react-native-responsive-screen-font';
import { COLORS, SIZES} from '../constant';


export default Header = ({navigation}) => {


  useEffect(() => {

  }, []);




  return (
    <View style={styles.container}>
      
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.width/1.003,
    height: SIZES.height / 11,
    justifyContent:'center',
    padding: '2.5%',
    borderBottomWidth: 0.2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignSelf: 'center',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width/1.15,
    alignItems: 'center',
    alignSelf:"center",  
  },
  textInput:{
      flexDirection: 'row',
      width:wp("55%"),
      height:SIZES.height/20,
      borderColor:COLORS.primary,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderWidth:wp("0.2%"),
      borderRadius:20,
      marginVertical:"2%",
      marginLeft: '2%',
      alignSelf:"center",
      backgroundColor: '#d7b8b7'
  },
  input:{
    padding:10,
    fontFamily:"Roboto-Regular",
  },


 
});