import React, { useState } from 'react';
import { View, Animated, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


// Components
import PersonalInformation from './PersonalInformation'
import OrderHistory from './OrderHistory';
import SavedAddresses from './SavedAddresses';
import Wallet from './Wallet';
import SubscriptionHistory from './SubscriptionHistory';

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

    return (
        <ScrollView>
        <View style={styles.container}>
            <Grid>
                <Col>
                    <PersonalInformation />
                    <OrderHistory />
                    <SavedAddresses />
                    <Wallet />
                    <SubscriptionHistory />
                </Col>
            </Grid>
        </View>
        </ScrollView>
    )
}
export default Prof