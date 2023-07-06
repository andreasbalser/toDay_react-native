import { useColorScheme } from 'react-native';

const colorScheme = () => {
    return useColorScheme();
};

export const Colors = {
    default: (colorScheme === 'light' ? '#111' : '#fff'),
    white: '#fff', 
    black: '#111', 
    gay200: '#222',
    gay400: '#444',
    gray600: '#666',
    gay800: '#888'
}