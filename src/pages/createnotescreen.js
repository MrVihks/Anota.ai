import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CreateNote from '../components/createnote';

export default function CreateNoteScreen() {

    return (
        <View>
            <CreateNote></CreateNote>
        </View>
    )
}