import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './Header/Header';
import SaveTodo from './SaveTodo/SaveTodo';
import TodoCard from './TodoCard/TodoCard';
import SearchBar from './SearchBar/SearchBar';

function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [myText, setMyText] = useState('');
  const [filteredList, setFilteredList] = useState([]); // Filtrelenmiş liste
  function UpdateCounter() {
    if (myText.length > 0) {
      setCounter(counter + 1);
      const value = {
        id: counter,
        title: myText,
        isDeleted: false,
      };
      setList(list.concat(value));
      console.log(value);
    } else {
      Alert.alert('Boş bir ekleme yapamazsınız...');
    }
  }

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  function handleSearch(text) {
    const filteredListItems = list.filter(value => {
      const searchedText = text.toLowerCase();
      const currentTitle = value.title.toLowerCase();
      return currentTitle.indexOf(searchedText) !== -1;
    });

    setFilteredList(filteredListItems); // Filtrelenmiş listeyi güncelle
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header setCounter={counter} />
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={filteredList.length > 0 ? filteredList : list}
        renderItem={item => (
          <TodoCard counter={counter} setCounter={setCounter} setTodo={item} />
        )}
      />
      <SaveTodo setUpdate={UpdateCounter} text={myText} setText={setMyText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});

export default App;
