import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactElement, useEffect, useState } from 'react'
import { initItem, Item } from '../models/item.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoContext = {
  items: Item[],
  setItems: Function
}

const initTodoContext: TodoContext = {
  items: [initItem],
  setItems: () => [initItem]
}

export const TodosProvider = createContext<TodoContext>(initTodoContext);

const TodosContext = ({ children }: { children: ReactElement[] }) => {
  const [items, setItems] = useState<Item[]>([initItem]);

  const getAllTodosAsync = async () => {
    try {
      await AsyncStorage.getItem("todos");
    }
    catch (e: any) {
      console.error("error : ", e);
    }
  }

  useEffect(() => {
    getAllTodosAsync();
  }, []);

  return (
    <TodosProvider.Provider value={{ items, setItems }}>
      {children}
    </TodosProvider.Provider>
  )
}

export default TodosContext

const styles = StyleSheet.create({})