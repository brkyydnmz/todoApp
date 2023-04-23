import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoCard.style';

const TodoCard = props => {
  const [isCompleted, setIsCompleted] = useState(false);

  function updateFlag() {
    if (!isCompleted) {
      setIsCompleted(true);
      props.setCounter(props.counter - 1);
    } else {
      setIsCompleted(false);
      props.setCounter(props.counter + 1);
    }
  }
  return (
    <View style={isCompleted ? styles.container : styles.container1}>
      <TouchableOpacity onPress={updateFlag}>
        <Text style={isCompleted ? styles.textbox : styles.textbox1}>
          {props.setTodo.item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
