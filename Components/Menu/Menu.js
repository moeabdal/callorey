import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

// Components
import MenuItem from './MenuItem'


const styles = StyleSheet.create({
    image: {
        height: 190,
        width: 400,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'ChalkboardSE-Bold',
        fontWeight: 'bold',
        fontSize: 32,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        color: '#000',
        textAlign: 'left',
        marginBottom: 30,
    },
    menuContainer: {
        textAlign: 'left',
        padding: 2
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        color: '#000',
        textAlign: 'left',
    },
    sectionContainer: {
        marginTop: 10
    }
})

const Menu = ({ route, navigation }) => {
    const item  = route.params
    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={item.image}/>
                <View style={styles.menuContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.sectionHeader}>Appetizers</Text>
                    <View style={styles.sectionContainer}>
                        <MenuItem item={item} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Menu