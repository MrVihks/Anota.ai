import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ShowNotes() {
    const [notes, setNotes] = useState([]);
    // Aqui ele busca as notas no AsyncStorage

    const getNotes = async () => {
        try {
            setNotes(JSON.parse(await AsyncStorage.getItem('@notes')))
            console.log(notes)
            const entries = Object.entries(notes[1])
            console.log(notes.length)
            const id = Object.values(entries[0]);
            console.log(id[1])
            const arrayItems = Object.values(entries[1])
            const arrayItem = Object.values(arrayItems[1])
            console.log(arrayItem[1])
        } catch (e) {
            console.log(e);
        }
    }
    const clearNotes = async () => {
        await AsyncStorage.clear();
    }
    useEffect(() => {
        getNotes();
        /*setInterval(() => {
            getNotes();
       }, 3000) */
    }, [])
    return (
        <View>
            <Text>Suas Notas:</Text>
            <Text className="mx-auto">{teste()}</Text>
            <TouchableOpacity onPress={getNotes}><Text>Recarregar</Text></TouchableOpacity>
        </View>
    )
}