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
        width: 420,
        textAlign: 'left',

    },
    content: {
        fontSize: 20,
        paddingLeft: 10
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

const SAItem = () => {
    const addresses = Profiles[0].savedAddresses
    const renderItem = ({ item }) => (
              <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.content}>Area: {item.area}</Text>
                        <Text style={styles.content}>Block: {item.block}</Text>
                        <Text style={styles.content}>Street: {item.street}</Text>
                        <Text style={styles.content}>Building: {item.building}</Text>
                        <Text style={styles.content}>Floor: {item.floor}</Text>
                        <Text style={styles.content}>Apartment: {item.apartment}</Text>
                    </View>
                </TouchableOpacity>   
      );
    return (
        <SafeAreaView>
            <FlatList
                data={addresses}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
       
    )
}

export default SAItem

 