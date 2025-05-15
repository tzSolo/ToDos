import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './Todo'
import { initItem } from '../models/item.model'

const AddToDo = () => {
    return (
        <View style={{ flex: 1 }}>
            <Todo {...{ caption: "Add", todo: initItem }} />
        </View>
    )
}

export default AddToDo

const styles = StyleSheet.create({})