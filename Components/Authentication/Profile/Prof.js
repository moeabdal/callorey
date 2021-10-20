import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Animated, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 40,
        backgroundColor: '#fff',
      },
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
        flex: 1,
        backgroundColor: '#fff',
      }
})

const Prof = () => {
    const [expanded, setExpanded] = useState(false)
    const [expand, setExpand] = useState(0)
    const handlePress = () => {
        expand === 0 ? setExpand(300) : setExpand(0)
    }
    return (
        <ScrollView>
        <View style={styles.container}>
            <Grid>
                <Col>
                    <TouchableOpacity onPress={handlePress}>
                        <Row style={{ height: 100 }}>
                            <View style={styles.cell}>
                                    <Text style={styles.cellHeader}>Personal Information</Text>  
                            </View>
                        </Row>
                        <Row style={{ height:expand }}>
                            <View style={styles.cellContent}>
                                <Text style={styles.cellHeader}>Section</Text>  
                            </View>
                        </Row>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Row style={{ height: 100 }}>
                            <View style={styles.cell}>
                                <Text style={styles.cellHeader}>Order History</Text>  
                            </View>
                        </Row>
                        <Row style={{ height:expand }}>
                            <View style={styles.cellContent}>
                                <Text style={styles.cellHeader}>Section</Text>  
                            </View>
                        </Row>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Row style={{ height: 100 }}>
                            <View style={styles.cell}>
                                <Text style={styles.cellHeader}>Saved Addresses</Text>  
                            </View>
                        </Row>
                        <Row style={{ height:expand }}>
                            <View style={styles.cellContent}>
                                <Text style={styles.cellHeader}>Section</Text>  
                            </View>
                        </Row>
                    </TouchableOpacity>
                </Col>
            </Grid>
        </View>
        </ScrollView>
    )
}
export default Prof