import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

import MyNotes from './mynotesscreen';
import CreateNoteScreen from './createnotescreen';

export default function Home() {
    return (
        <Tab.Navigator initialRouteName='MyNotes' screenOptions={{
            tabBarActiveBackgroundColor: '#ffffff',
            tabBarInactiveBackgroundColor: '#3b82f6',
            tabBarInactiveTintColor: '#fff',
            tabBarStyle:{
                size:'10px'
            }
        }}>
            <Tab.Screen name="MyNotes" component={MyNotes} options={{
                tabBarLabel: 'Minhas anotações',
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="notes" size={size} color={color} />),
            }} />
            <Tab.Screen name="CreateNote" component={CreateNoteScreen} options={{
                tabBarLabel: 'Criar Anotação',
                headerShown:false,
                headerTitleStyle:{
                    fontFamily:'Kanit'
                },
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="add-to-list" size={size} color={color} />),
            }} />
        </Tab.Navigator>
    )
}