import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


const ProfileButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Button
                title="Profile"
                color="#000"
                />
        </TouchableOpacity>
    )
}

export default ProfileButton