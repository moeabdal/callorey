import React from 'react';
import { FlatList, SectionList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Restaurants from '../../data'


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    marginVertical: 5,
    marginHorizontal: 1,
    height: 225
},
imageContainer: {
    borderRadius: 4,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderColor: '#ccc',
    height: '90%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute'
},
cardTitle: {
    fontFamily: 'Thonburi-Bold',
    fontSize: 25,
    color: '#fff',
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    marginLeft: 5
},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#000'
  },
  rowContainter: {
    color: '#0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
  },

  cardFooter: {
    color: '#666',
    paddingLeft: 5,
    paddingRight: 5
  },

  cardContent: {
    fontFamily: 'Thonburi',
    color: '#fff',
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    marginLeft: 5
  },
}
);


const RestaurantItem = ({navigation}) => {
    const data = Restaurants
  return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => 
                (
                    <View style={styles.container}>
                      <TouchableOpacity onPress={() => navigation.navigate('MenuScreen',  item )}>
                        <Image style={styles.imageContainer} source={item.image} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <View>
                            <Text style={styles.cardContent}>{item.description}</Text>
                        </View>
                        <View style={styles.rowContainter}>
                            <Text style={styles.cardFooter}>{item.deliveryTime}</Text>
                            <Text style={styles.cardFooter}>{item.rating}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                )
                }
            />
        </View>
  );
}

export default RestaurantItem;