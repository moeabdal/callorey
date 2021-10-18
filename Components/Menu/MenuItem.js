import { CustomConsole } from '@jest/console';
import React from 'react'

import { FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderColor: '#ccc',
        borderWidth: 0.5,
        shadowColor: '#999',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
        borderRadius: 4,
        height: 130,
        margin: 1
    },
    title: {
        fontSize: 16,
        textAlign: 'left',
        color: '#666',
        textAlign: 'left',
        padding: 2
    },
    content: {
        fontSize: 15,
        textAlign: 'left',
        color: '#999',
        textAlign: 'left',
        padding: 2,
        flexWrap: 'wrap'
    },
    imageContainer: {
        borderRadius: 4,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        borderWidth: 1,
        borderColor: '#ccc',
        height: 60,
        width: 70,
        marginTop: 10
    },
    rowContainter: {
        color: '#0f0',
        flexDirection: 'row',
        alignContent: 'space-between'
      },
    contentContainer: {
        width: 290,
    }
})

const MenuItem = () => {
    return (
        <ScrollView>
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.rowContainter}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Menu Item</Text>
                <Text style={styles.content}>This is a description of the menu item. it is continued on this line to see the effect it has.</Text>
            </View>
            <Image style={styles.imageContainer} source={require('../Restaurant/nasty-burger.jpeg')} />
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.rowContainter}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Menu Item</Text>
                <Text style={styles.content}>This is a description of the menu item. it is continued on this line to see the effect it has.</Text>
            </View>
            <Image style={styles.imageContainer} source={require('../Restaurant/nasty-burger.jpeg')} />
            </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
    )
}

export default MenuItem