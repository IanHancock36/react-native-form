import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CheckListForm } from './screens/check-list-form';
import ChecklistProgress from './screens/checklist-progress';


export default function App() {
  return (
    <NavigationContainer>
    {/* <CheckListForm /> */}


    <ChecklistProgress />

    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
