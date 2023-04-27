import React, { useState, useEffect } from "react";
import { TouchableOpacity,
   StyleSheet, View, Image, Text,
  Modal } from "react-native";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen-font";

import { COLORS , FONTS, SIZES, icons } from "../constant";

export default function Footer({navigation , screens}){
    const [HomeColor , setHomeColor] = useState(COLORS.secondary);
    const [ShippingColor , setShippingColor] = useState(COLORS.white);
    const [CollectionColor , setCollectionColor] = useState(COLORS.white);
    const [OrderColor , setOrderColor] = useState(COLORS.white);
    const [UserColor , setUserColor] = useState(COLORS.white);


    function toggleColor(active){
        setHomeColor(active == '1' ? COLORS.secondary : COLORS.white)
        setShippingColor(active == '2' ? COLORS.secondary : COLORS.white)
        setCollectionColor(active == '3' ? COLORS.secondary : COLORS.white)
        setOrderColor(active == '4' ? COLORS.secondary : COLORS.white)
        setUserColor(active == '5' ? COLORS.secondary : COLORS.white)
    }

    return(
        <View style={Styles.FooterView}>
            <View
          style={{
            width: SIZES.width/1.04,
            height: Platform.OS === 'ios' ? SIZES.height / 13 : SIZES.height / 11,
            flexDirection: "row",
            alignContent: 'center',
            justifyContent: "space-between",
            alignItems: 'center',
            padding: "5%",
            marginHorizontal: "2%",
            marginVertical: "2%",
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            alignSelf: 'center'
          }}
        >
            
        <TouchableOpacity onPress={() => toggleColor('1')}
         style={Styles.align}>
        <Image source={icons.Home}/>
        <Text style={{color: HomeColor , fontSize: 12 , marginTop: '2%'}}>Home</Text>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => toggleColor('2')}   
          style={Styles.align}>
        <FontAwesome5 name={'comments-dollar'} size={20}  color={ShippingColor}/>
        <Text style={{fontFamily: FONTS.regular , color: ShippingColor , fontSize: 12 , marginTop: '2%'}}>Collection</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary}}>
        <FontAwesome5 name={'plus'} size={20} color={CollectionColor}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleColor('4')}
         style={Styles.align}>
        <FontAwesome5 name={'calendar-alt'} size={20} color={OrderColor}/>
        <Text style={{fontFamily: FONTS.regular , color: OrderColor , fontSize: 12 , marginTop: '2%'}}>Stock</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {toggleColor('5') , navigation.navigate('Ordernow')}}
         style={Styles.align}>
        <FontAwesome5 name={'house-user'} size={20} solid color={UserColor}/>
        <Text style={{fontFamily: FONTS.regular , color: UserColor , fontSize: 12 , marginTop: '2%'}}>Payment</Text>
        </TouchableOpacity>
        </View>
        </View>
    )

}

const Styles = StyleSheet.create({
    FooterView: {
        justifyContent: 'center',
        backgroundColor: '#f4f6f1',
        width: "100%",
        shadowColor: "#000",
        height: Platform.OS === "ios" ? SIZES.height / 8.5 : "auto",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 10,
        elevation: 1,
      },
      FAicon:{
        width: 20,
        height: 20
      },
      align:{
        alignItems: 'center', 
        justifyContent: 'center'
      }
})


