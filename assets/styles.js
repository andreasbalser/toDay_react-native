import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from './colors';

const colorScheme = () => {
    return useColorScheme();
};

export const Styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: colorScheme === 'light' ? Colors.white : Colors.black,
    },
    textStyleDefault: {
        color: colorScheme === 'light' ? Colors.black : Colors.white,
    },
    textStyleChecked: {
        color: colorScheme === 'light' ? Colors.gray600 : Colors.gray600,
        textDecorationLine: 'line-through', 
    },
})