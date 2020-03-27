import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [validCod, setvalidCod] = useState('')
  const corret = () => {
    if (validCod.length < 10) { return <Text style={styles.worng}>輸入錯誤</Text> }
    else { return <Text style={styles.right}>輸入正確</Text> }
  }

  return (
    <View style={styles.container}>
      <Text>第一次作業嘗試</Text>
      <TextInput
        style={{ height: 50, width: 300, borderColor: 'balck', borderWidth: 5, backgroundColor: 'gray', color: 'white', textAlign: 'center' }}
        onChangeText={(text) => setvalidCod(text)}
        value={validCod}
        maxLength={10}
        placeholder='請輸入手機號碼'
        placeholderTextColor='white'
        keyboardType={'numeric'}
        secureTextEntry={false}
        editable={true}
        autoFocus={true}
        returnKeyType='done'
      />
      <Text style={styles.showbar}>您輸入的號碼是:{validCod}</Text>
      <Text >{corret()}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showbar: {
    fontSize: 20,
    color: 'black',
    marginTop: 10
  },
  worng: {
    fontSize: 30,
    color: 'red',
    marginTop: 30
  },
  right: {
    fontSize: 30,
    color: 'green',
    marginTop: 30
  }

});
