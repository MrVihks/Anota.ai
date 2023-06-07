import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

export default function MyNotes() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [notes, setNotes] = useState(0);

    const getNotes = async () => {
        try {
            setTitle(JSON.parse(await AsyncStorage.getItem('@title')));
            setDescription(JSON.parse(await AsyncStorage.getItem('@description')));
        } catch (e) {
            console.log(e);
        }
    }
    const clearNotes = async () => {
        await AsyncStorage.clear();
    }
    useEffect(() => {
        getNotes();
        setInterval(() => {
            getNotes();
        }, 500)
    }, [])
    if (title != null) {
        return (
            <View>
                <Text className="text-3xl text-center mt-2">Minhas Anotações:</Text>
                <View className="bg-blue-200 mx-8 rounded-lg p-5 mt-5">
                    <Text className="text-3xl text-center mt-2">{title}</Text>
                    <Text className="text-lg text-center mt-2">{description}</Text>
                </View>
                <TouchableOpacity onPress={clearNotes} className='text-center mx-auto mt-5'><Text className="text-red-500 text-xl">Limpar anotações</Text></TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View>
                <Text  className="font-[Kanit] text-3xl mx-3 text-center mt-10">Parece que você ainda não tem nenhuma anotação, <Text className='text-red-500 font-extrabold'>crie uma !</Text></Text>
            </View>
        )
    }
}