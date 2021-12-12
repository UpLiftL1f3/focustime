import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on? </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.Text);
            }}
          />

          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'Center',
    paddint: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
});
