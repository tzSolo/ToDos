import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Item } from '../models/item.model';
import { TodosProvider } from './TodosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const Todo = ({ caption, todo }: { caption: string, todo: Item }) => {
    const { items, setItems } = useContext(TodosProvider);
    const [newItem, setNewItem] = useState<Item>(todo);

    const addTodoAsync = async () => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify([...items, newItem]));
            setItems([...items, newItem]);
            showToast("Success");
        }
        catch (e: any) {
            showToast("Failed");
        }
    };

    const editTodoAsync = async() => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify([items]));
            showToast("Success");
        }
        catch (e: any) {
            showToast("Failed");
        }
    }

    const showToast = (status: string) => {
        if (status == "Success") {
            Toast.show({
                text1: 'Success !',
                text2: `ToDo ${caption}ed successfully.`,
                position: 'bottom',
                type: 'success',
            });
        } else {
            Toast.show({
                text1: 'Error !',
                text2: `Failed to ${caption} todo.`,
                position: 'bottom',
                type: 'error',
            });
        }
    };

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.View}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='todo'
                    value={newItem.name}
                    onChangeText={(value) => setNewItem({ ...newItem, name: value })}
                />
                <Pressable onPress={() => caption == "Add" ? addTodoAsync() : editTodoAsync()} style={({ pressed }) => [{
                    backgroundColor: pressed ? "grey" : "indigo"
                },
                styles.Pressable]}
                >
                    <Text>{caption} ToDo</Text>
                </Pressable >
            </View>
        </SafeAreaView>
    )
}

export default Todo

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
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