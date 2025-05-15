import { StyleSheet } from 'react-native'
import React from 'react'
import Todo from './Todo'
import { Item } from '../models/item.model'

const EditToDo = ({ item }: { item: Item }) => {
    return (
        <Todo {...{ caption: "Edit", todo: item }} />
    )
}

export default EditToDo

const styles = StyleSheet.create({})