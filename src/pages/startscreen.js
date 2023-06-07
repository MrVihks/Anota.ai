import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Start ({navigation}){
    useEffect(()=>{
        AsyncStorage.clear();
    }, [])
    return(
        <View className="mt-32 mx-auto">
            <Text className='text-3xl'>Bem vindo ao <Text className="font-extrabold text-blue-500">Anota.ai</Text></Text>
            <Text className="text-xl mt-1">O app das anotações </Text>
            <TouchableOpacity onPress={()=>navigation.replace('Home')} className="bg-blue-500 p-4 mr-40 rounded-full mt-6"><Text className="text-white text-center font-bold text-2xl">&rarr;</Text></TouchableOpacity>
        </View>
    );
}