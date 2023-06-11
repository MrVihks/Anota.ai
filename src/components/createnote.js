import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function CreateNote() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [id, setId] = useState(0);

    function Note(id, title, description, created_at) {
        return ({
            id: id,
            note: {
                title: title,
                description: description,
                created_at: created_at
            }
        })
    }
    const createNote = async () => {
        try {
            let date = new Date().toLocaleDateString()
            const newNote = new Note(id , title,description,date)
            setNotes([...notes, newNote]);
            await AsyncStorage.setItem('@notes',JSON.stringify(notes));
            console.log(await AsyncStorage.getItem('@notes'))
        } catch (e) {
            console.log(e);
        }
    }
    const nextStep = () => {
        if (title != null) {
            setId(id+1);
            createNote();
            setTitle();
            setDescription();
            
        }
    }
    return (
        <View>
            <TextInput placeholder='Titulo' onFocus={() => setTitle()} value={title} onChangeText={setTitle} className="text-center border p-2 h-20 m-4 rounded-2xl " />
            <TextInput placeholder='Anotação' onFocus={() => setDescription()} value={description} onChangeText={setDescription} multiline={true} className="text-center border p-2 h-64 m-4 rounded-2xl" />
            <TouchableOpacity onPress={()=>nextStep()} className="mt-9"><Text className=" text-white text-2xl bg-blue-500 text-center rounded-3xl mx-16 p-4">CRIAR</Text></TouchableOpacity>
        </View>
    );
}