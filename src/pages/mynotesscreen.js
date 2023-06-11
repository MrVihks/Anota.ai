import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

import ShowNotes from '../components/mynotes';

export default function MyNotes() {
    return (
        <ShowNotes />
    )

}