import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ questionText, imageSource, options, onAnswerSelect }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{questionText}</Text>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <RNPickerSelect
                onValueChange={onAnswerSelect}
                items={options}
                placeholder={{ label: "Select an answer...", value: null }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 18,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 10,
    },
});

export default Question;
