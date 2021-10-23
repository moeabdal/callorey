import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Row } from 'react-native-easy-grid';

// Components
import PIItem from '../AccordianSections/PIItem'

const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#333',
      },
      cellHeader: {
          fontSize: 20
      },
      cellContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }
})

const PersonalInformation = () => {
    const [expand, setExpand] = useState(0)
    const handlePress = () => {
        expand === 0 ? setExpand(300) : setExpand(0)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <Row style={{ height: 100 }}>
                <View style={styles.cell}>
                    <Text style={styles.cellHeader}>Personal Information</Text>  
                </View>
            </Row>
            <Row style={{ height:expand }}>
                <View>
                    <PIItem />
                 </View>
            </Row>
        </TouchableOpacity>
    )
}
export default PersonalInformation