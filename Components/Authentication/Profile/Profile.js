import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { List } from 'react-native-paper';

const Profile = () => {

    return (
        <View>
            <List.Section title="Profile">
                <List.Accordion
                    title="Personal Information"
                    left={props => <List.Icon {...props} icon="folder" />}
                    >
                    <List.Item title="Name:" />
                    <List.Item title="Contact number:" />
                    <List.Item title="E-mail:" />
                </List.Accordion>
                <List.Accordion
                    title="Order History"
                    left={props => <List.Icon {...props} icon="folder" />}
                    >
                    <List.Item title="Order 1" />
                    <List.Item title="Order 2" />
                    <List.Item title="Order 3" />
                </List.Accordion>
                <List.Accordion
                    title="Saved Addresses"
                    left={props => <List.Icon {...props} icon="folder" />}
                    >
                    <List.Item title="Address 1" />
                    <List.Item title="Address 2" />
                    <List.Item title="Address 3" />
                </List.Accordion>
                <List.Accordion
                    title="Wallet"
                    left={props => <List.Icon {...props} icon="folder" />}
                    >
                    <List.Item title="Available Credit: " />
                </List.Accordion>
                <List.Accordion
                    title="Subscription History"
                    left={props => <List.Icon {...props} icon="folder" />}
                    >
                    <List.Item title="Restaurant: " />
                </List.Accordion>
            </List.Section>
        </View>
    )
}

export default Profile