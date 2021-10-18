import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const ProfileButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.push('ProfileScreen')}>
            <Button
                title="Profile"
                color="#fff"
                />
        </TouchableOpacity>
    )
}

export default ProfileButton