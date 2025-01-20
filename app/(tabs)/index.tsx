import { StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      {datas.datas.map((data) => (
        <Text key={data.name}>{data.name}</Text>
      ))}
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
