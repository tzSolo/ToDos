import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { initItem, Item } from '../models/item.model';
import { TodosProvider } from './TodosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const Todo = () => {
    const { items, setItems } = useContext(TodosProvider);
    const [newItem, setNewItem] = useState<Item>(initItem);

    const addTodoAsync = async () => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify([...items, newItem]));
            setItems([...items, newItem]);
            console.log(newItem.name);

        }
        catch (e: any) {
            console.error("error : ", e);
        }
    }
    const showToast = () => {
        Toast.show({
            text1: 'Success !',
            text2: 'ToDo added successfully.',
            position: 'top',
            type: 'success',
        });
    };

    return (
        <SafeAreaView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Show Toast" onPress={showToast} />
                <Toast />
            </View>
            <View style={styles.View}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='todo'
                    value={newItem.name}
                    onChangeText={(value) => setNewItem({ ...newItem, name: value })}
                />
                <Pressable onPress={() => addTodoAsync()} style={({ pressed }) => [{
                    backgroundColor: pressed ? "grey" : "indigo"
                },
                styles.Pressable]}
                >
                    <Text>Add ToDo</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
}

export default Todo

const styles = StyleSheet.create({
    TextInput: {
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 5,
        borderStyle: "solid",
        padding: 10,
        width: 250
    },
    Pressable: {
        opacity: 0.7,
        width: 100,
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    },
    View: {
        height: 90,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }
})