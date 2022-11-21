import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles'

export function Groups() {
  const navigation = useNavigation();
  
  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat', 'Amigos da facul']);

  function handleNewGroup() {
    navigation.navigate('newGroupScreen')
  }

  return (
    <Container>
      <Header showBackButton={false}/>

      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => console.log('cu')}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}