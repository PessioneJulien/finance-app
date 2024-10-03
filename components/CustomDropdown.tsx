import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { AntDesign, Ionicons } from '@expo/vector-icons';
// Propriétés des boutons

interface DropDownData {
    label: string;
    value: string;
}


interface DropDownProps {
    onPress: () => void;
    data: DropDownData[]; // Typage plus strict des données
    style?: any;
    value: string;
    setValue: (value: string) => void;
    setIsFocus: (value: boolean) => void;
}

// Composant de base du bouton
const CustomDropDownComponent: React.FC<DropDownProps> = ({ data, value, setValue, setIsFocus }) => {
    const renderItem = (item: { label: string; value: string }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            containerStyle={styles.itemContainerStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="EUR"
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderItem={renderItem}
        />
    );
};

export const CustomDropDown: React.FC<DropDownProps> = (props) => {
    return <CustomDropDownComponent {...props} />;
};

const styles = StyleSheet.create({
    dropdown: {
        marginHorizontal: 5,
        // width must be adaptive to the text length
        minWidth: Dimensions.get('window').width * 0.23,

        height: Dimensions.get('window').width * 0.1,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemContainerStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
});