import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToFonts as wf,
    heightPercentageToFonts as hf,
  } from "react-native-responsive-screen-font";
  

// Color Code #253A79 #EE351F #0A0A0A #707070 #4B75F2 #D8E2FF #1A2853 #59627D

export const COLORS = {
    // base colors
    primary: "#313130", 
    primary2: '#bd6325',
    secondary: "#f2bc53",   
    red: "#ff0000", 
    // colors
    black: "#0A0A0A",
    white: "#FFFFFF",

    LightGreen:'#18D92B',

    lightGray: "#707070",
    lightGray1:"#59627D",

    blue:"#4B75F2",
    
};

export const SIZES = {
    width,
    height,
    hp,
    wp
};



const appTheme = { COLORS, SIZES };

export default appTheme;
