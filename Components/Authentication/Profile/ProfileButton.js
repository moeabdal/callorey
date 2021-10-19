import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProfileButton = () => {
    const navigation = useNavigation()
    const handlePress = () => {navigation.navigate('ProfileScreen')}
    return (
        <TouchableOpacity>
            <Button
                title="Profile"
                color="#000"
                onPress={handlePress}
                />
        </TouchableOpacity>
    )
}

export default ProfileButton