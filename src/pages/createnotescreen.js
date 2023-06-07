import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateNoteScreen(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    const createNote = async ()=>{
        try {
            await JSON.stringify(AsyncStorage.setItem('@title', JSON.stringify(title)));
            await JSON.stringify(AsyncStorage.setItem('@description', JSON.stringify(description)));
        }catch(e){
            console.log(e);
        }
    }
    const nextStep = ()=>{
        if(title != null){
            createNote();
        }
    }
    return(
        <View>
            <TextInput placeholder='Titulo'onFocus={()=>setTitle('')} value={title} onChangeText={setTitle} className="text-center border p-2 h-20 m-4 rounded-2xl font-[Kanit]"/>
            <TextInput placeholder='Anotação' onFocus={()=>setDescription('')} value={description} onChangeText={setDescription} multiline={true} className="font-[Kanit] text-center border p-2 h-64 m-4 rounded-2xl" />
            <TouchableOpacity onPress={nextStep} className="mt-9"><Text className="font-[Kanit] text-white text-2xl bg-blue-500 text-center rounded-3xl mx-16 p-4">CRIAR</Text></TouchableOpacity>
        </View>
    )
}