import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './SaveTodo.style';

const SaveToDo = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak.."
        placeholderTextColor="#808080"
        style={props.text.length > 0 ? styles.textinput1 : styles.textinput}
        value={props.text}
        onChangeText={props.setText}
      />
      <TouchableOpacity
        style={props.text.length > 0 ? styles.button1 : styles.button}
        onPress={props.setUpdate}>
        <Text style={StyleSheet.create({color: 'white'})}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SaveToDo;
