import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonList {
  datas: Pokemon[];
}

export default function TabOneScreen() {
  const [datas, setDatas] = useState<PokemonList>({ datas: [] });
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      setDatas({ datas: res.data.results });
    });
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {datas.datas.map((data) => (
        <View key={data.name} style={styles.cardList}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png' }} style={styles.tinyLogo} />
          <Text style={styles.title}>{data.name}</Text>
        </View>

      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardList: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    boxShadow: '0px 0px 27px 0px rgba(0,0,0,0.10)',
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
