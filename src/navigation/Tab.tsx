import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowAllToDos from '../components/ShowAllToDos';
import AddToDo from '../components/AddToDo';
import { NavigationContainer } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const Tab = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName='ToDoList'
                screenOptions={{
                    tabBarInactiveTintColor: "green",
                    tabBarActiveTintColor: "red",
                    tabBarLabelStyle: {
                        fontSize: 25,
                    },
                    tabBarStyle: {
                        marginBottom: 20,
                        paddingBottom: 10,
                        height: 75,
                    }
                }}>
                <BottomTab.Screen name='ToDoList' component={ShowAllToDos} />
                <BottomTab.Screen name='AddToDo' component={AddToDo} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default Tab

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
})