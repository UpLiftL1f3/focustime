import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSize, paddingSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

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
              addSubject(nativeEvent.text);
            }}
          />

          <RoundedButton size={50} title="+" onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingSizes.md,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'Center',
    paddint: 16,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
