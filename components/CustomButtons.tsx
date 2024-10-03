import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// Propriétés des boutons
interface ButtonProps {
    onPress: () => void;
    text?: string;
    icon?: React.ReactNode;
    style?: any;
    textStyle?: any;
}

// Composant de base du bouton
const CustomButton: React.FC<ButtonProps> = ({ onPress, text, icon, style, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.defaultButton, style]} onPress={onPress}>
            <View style={styles.contentContainer}>
                {icon && <View style={{ marginRight: text ? 8 : 0 }}>{icon}</View>}
                {text && <ThemedText style={[styles.text, textStyle]}>{text}</ThemedText>}
            </View>
        </TouchableOpacity>
    );
};

// Bouton circulaire
export const CircleButton: React.FC<ButtonProps> = (props) => {
    const { width } = useWindowDimensions();
    const size = width * 0.1; // 20% de la largeur de l'écran pour le bouton
    return <CustomButton {...props} style={[{ width: size, height: size, borderRadius: size / 2 }]} />;
};

// Bouton arrondi
export const RoundedButton: React.FC<ButtonProps> = (props) => {
    const { width } = useWindowDimensions();
    const padding = props.style?.padding || 10;
    const radius = props.style?.borderRadius + padding || 25;
    return <CustomButton {...props} style={[styles.rounded, { width: width * 0.2, height: width * 0.15, borderRadius: radius }]} />;
};

// Petit bouton carré
export const SmallSquareButton: React.FC<ButtonProps> = (props) => {
    const { width } = useWindowDimensions();
    const size = width * 0.25; // 25% de la largeur de l'écran pour le carré
    return <CustomButton {...props} style={[styles.smallSquare, { width: size, height: size }]} />;
};

// Grand bouton carré
export const LargeSquareButton: React.FC<ButtonProps> = (props) => {
    const { width } = useWindowDimensions();
    const size = width * 0.5; // 50% de la largeur de l'écran pour le carré
    return <CustomButton {...props} style={[styles.largeSquare, { width: size, height: size }]} />;
};

const styles = StyleSheet.create({
    defaultButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '',
    },
    iconContainer: {
    },
    // Styles spécifiques aux boutons
    rounded: {
        borderRadius: 25,
    },
    smallSquare: {
        borderRadius: 10,
    },
    largeSquare: {
        borderRadius: 20,
    },
});
