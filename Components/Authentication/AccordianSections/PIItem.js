import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Profiles from '../../../profile-data'

const styles = StyleSheet.create({
    container : {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        width: 350,
        height: 250
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

const PIItem = () => {
    const profile = Profiles[0]
    console.log(profile)
    return (
        <View>
            <View>
                <Text styles={styles.title}>Welcome, {profile.firstName}</Text>
            </View>
            <View>
                    <Text>E-mail: {profile.email}</Text>
                    <Text>Registered phone number: {profile.phone}</Text>
            </View>
         </View>
    )
}

export default PIItem