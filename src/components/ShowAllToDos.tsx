import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TodosProvider } from './TodosContext';
import EditToDo from './EditToDo';

const ShowAllToDos = () => {
    const { items } = useContext(TodosProvider);

    return (
        <View>
            <View>
                {items.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemStatus}>{item.isComplete}</Text>
                        {/* <EditToDo item={item} /> */}
                    </View>
                ))}
            </View>
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