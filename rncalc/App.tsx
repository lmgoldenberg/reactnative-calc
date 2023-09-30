import { Text, SafeAreaView, StyleSheet, View, Switch } from 'react-native';
import { useState } from 'react';
import { ThemeContext } from './src/context/themeContext';
import { myColors } from './src/styles/colors';
import Button  from './src/components/button';
import MyKeyboard  from './src/components/myKeyboard';

export default function App() {
  const [theme,setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor:'#000'}]}>
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    justifyContent: 'flex-start',
    padding: 8,
    alignItems: 'center',
  },
});
