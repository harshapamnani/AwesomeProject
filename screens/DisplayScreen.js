import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { SIZES, icons } from '../constant';

const DisplayScreen = ({ navigation, route }) => {

    const id = route.params.id
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        ItemDetails()
    }, [])

    const ItemDetails = async () => {
        setLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/photos/' + id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log('....itemDetails', response);
                setData(response)
                setLoading(false)
            })
    }

    return (
        <View style={styles.container}>
            {loading ?
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='small' color="#313130" />
                </View>
                :
                <ImageBackground source={{uri: data.url}} 
                style={styles.imageBG}
                >
                <View style={styles.card}>
                    <Text style={{ ...styles.textStyle, fontWeight: 'bold', fontSize: 20 }}>{data.title}</Text>
                </View>
                </ImageBackground>

            }

        </View>
    )
}

export default DisplayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f4f6f1'
    },
    card: {
        marginVertical: "2%",
        width: SIZES.width / 1.1,
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    textStyle: {
        width: SIZES.width / 1.4,
        color: '#000',
        fontSize: 16,
        marginVertical: '2%'
    },
    inner: {
        justifyContent: 'space-between',
        width: SIZES.width / 1.3,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: 'red'
    },
    imageBG:{
        zIndex: 1 , 
        height: SIZES.height/1,
          width: SIZES.width/1,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }
})