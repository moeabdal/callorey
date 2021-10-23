import { useRoute } from '@react-navigation/core';
import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

// Data
import Profiles from '../../../profile-data';

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        flex: 1,
        marginBottom: 20,
        flexDirection: 'column',
        height: 200
    },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        padding: 2,
        marginBottom: '2%',
        backgroundColor: '#666',
        fontWeight: 'bold',
        flex: 1

    },
    cardTitle: {
        fontSize: 20,
        color: '#333',
        textAlign: 'left',
        padding: 2,
        marginBottom: '2%',
        fontWeight: 'bold',
        borderColor: '#666',
        borderWidth: 1,

    },
    content: {
        fontSize: 19,
        color: '#999',
        padding: 2,
        flexWrap: 'wrap',
        borderColor: '#000',
        borderWidth: 1,
        height: 120
    },
    imageContainer: {
        borderRadius: 4,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        borderWidth: 1,
        borderColor: '#ccc',
        height: 80,
        width: 80,
        marginTop: '12%'
    },
    rowContainter: {
        color: '#0f0',
        flexDirection: 'row',
        alignContent: 'space-between',
      },
    contentContainer: {
        width: '80%',
        padding: '1%',
    },
    cardFooter: {
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingLeft: '1%'
    },
    footerContentContainer: {
        fontSize: 19,
        color: '#999',
        padding: 2,
        flexWrap: 'wrap',
        borderColor: '#000',
        borderWidth: 1,
        width: '79%'
    }
});

const OHItem = () => {
    const orders = Profiles[0].orderHistory
    const renderItem = ({ item }) => (
              <TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.rowContainter}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.cardTitle}>{item.restaurant}</Text>
                                <Text style={styles.content}>Date: {item.date}</Text>
                            </View>
                            <Image style={styles.imageContainer} source={require('../../Restaurant/nasty-burger.jpeg')} />
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.footerContentContainer}>
                                <Text>Total {item.total}</Text>
                            </View>
                            </View>
                    </View>
                </TouchableOpacity>   
      );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
       
    )
}

export default OHItem

 