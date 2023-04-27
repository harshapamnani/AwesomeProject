import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { SIZES, icons } from '../constant';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../component/Header';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';
const DATA_LIMIT = 10;

const HomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?page=${page}&limit=10`);
            const newData = await response.json();
            setData([...data, ...newData]);
            setPage(page + 1);

        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };



    useEffect(() => {
        fetchData()
    }, [])

    const renderFooter = () => {
        return loading ? (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="small" color="#313130" />
            </View>
        ) : null;
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('DisplayScreen' , {id : item.id})} style={styles.card}>
                <View style={styles.inner}>
                    <Text style={styles.textStyle} numberOfLines={2}>{item.title}</Text>
                    <Image source={{uri: item.thumbnailUrl}} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <>
            {/* <Header /> */}
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    onEndReached={fetchData}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={renderFooter}
                    windowSize={5}
                    shouldItemUpdate={(prevItem, nextItem) => prevItem !== nextItem}
                />

            </View>
        </>
    );
};

export default HomeScreen;

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
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SIZES.width / 1.2,
        alignItems: 'center',
        alignSelf: "center",
    },
    textStyle: {
        width: SIZES.width / 1.4,
        color: '#000',
        fontSize: 16,
        fontWeight: '500'
    }
});
