import React, { PureComponent, ReactNode } from 'react';
import { Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CircleButton } from './CustomButtons';
import { CustomDropDown } from './CustomDropdown';
import { Ionicons } from '@expo/vector-icons';
import { Blurred } from './BlurComponent';
// generate a random number
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100000).toString();
};

interface CardComponentViewProps {
    balance: string;
}

interface CardComponentViewState {
    isVisible: boolean;
    balance: string;
    currency: string;
    currencyValue: string;
    currencyList: { label: string; value: string }[];
    conversionRates: { [key: string]: number };
}

export class CardComponentView extends PureComponent<CardComponentViewProps, CardComponentViewState> {
    constructor(props: CardComponentViewProps) {
        super(props);
        // Initialiser l'état pour gérer la visibilité
        this.state = {
            isVisible: true, // Par défaut, le texte est visible et l'icône est l'œil ouvert
            balance: props.balance,
            currency: 'USDT',
            currencyValue: '2',
            currencyList: [
                { label: 'EUR', value: '1' },
                { label: 'USDT', value: '2' },
                { label: 'ZLT', value: '3' }
            ],
            conversionRates: {
                '1-2': 1.2,  // EUR -> USDT
                '2-1': 1 / 1.2,  // USDT -> EUR
                '1-3': 0.8,  // EUR -> ZLT
                '3-1': 1 / 0.8,  // ZLT -> EUR
                '2-3': 0.6,  // USDT -> ZLT
                '3-2': 1 / 0.6  // ZLT -> USDT
            }
        };
    }
    handleValueChange = (value: string) => {
        const previousValue = this.state.currencyValue;
        const newValue = value;

        // Mise à jour de la valeur de la nouvelle devise
        this.setState({ currencyValue: newValue });

        // Clé de conversion basée sur les devises précédentes et actuelles
        const conversionKey = `${previousValue}-${newValue}`;

        // Vérification s'il existe un taux de conversion pour ces devises
        const conversionRate = this.state.conversionRates[conversionKey];

        // Si un taux de conversion existe, on fait la conversion
        if (conversionRate) {
            this.setState({
                balance: (parseFloat(this.state.balance) * conversionRate).toFixed(2)
            });
        }
    }

    toggleVisibility = () => {
        // Changer l'état en inversant isVisible
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    };

    render() {
        const { isVisible, balance, currencyList, currencyValue } = this.state;

        return (
            <ThemedView style={{ padding: 16, margin: 16, borderRadius: 16, backgroundColor: '#AAA' }}>
                {/* Bouton avec l'icône qui change en fonction de la visibilité */}
                <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                    <ThemedText style={{ fontSize: 16, color: '#000' }}>
                        Total balance in {currencyList.find((item) => item.value === currencyValue)?.label}
                    </ThemedText>
                    <ThemedView style={{ flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'transparent' }}>
                        <CircleButton
                            onPress={this.toggleVisibility}
                            icon={
                                <Ionicons
                                    name={isVisible ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color={'#000'}
                                />
                            }
                        />
                        <CustomDropDown
                            onPress={() => console.log('Dropdown pressed')}
                            data={this.state.currencyList}
                            style={{ backgroundColor: 'transparent' }}
                            value={currencyValue}
                            setValue={this.handleValueChange}
                            setIsFocus={() => console.log('Dropdown focus')}
                        />
                    </ThemedView>
                </ThemedView>

                {/* Texte qui devient flou ou visible en fonction de isVisible */}

                <Blurred intensity={isVisible ? 0 : 10} tint="light">
                    <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>
                        {isVisible ? balance : generateRandomNumber()}
                    </ThemedText>
                </Blurred>

                {/* Texte qui devient flou ou visible en fonction de isVisible */}
                <ThemedText style={{ fontSize: 16, opacity: isVisible ? 1 : 0.2 }}>
                    Card Description
                </ThemedText>
            </ThemedView>
        );
    }
}

export default CardComponentView;