export const [fontsLoaded] = useFonts({
    'Kanit': require('../../assets/fonts/Kanit/Kanit-Regular.ttf'),
});
if (!fontsLoaded) {
    return null;
}