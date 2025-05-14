import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TodosProvider } from './TodosContext';

const ShowAllToDos = () => {

    const { items } = useContext(TodosProvider);

    return (
        <View>
            {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemStatus}>{item.isComplete}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    itemName: {
        fontSize: 18,
    },
    itemStatus: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ShowAllToDos;