import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const plus = () => { setCount(count + 1) }
  const minus = () => { setCount(count - 1) }
  const reset = () => { setCount(0) }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>目前的數字是: {count}</Text>
      <TouchableOpacity onPress={() => plus()}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/gb0_BG8RLJa9cSZkogQAixdkQYOVAlW-JVD5_FFM2TwIaqedIyiWnAt2d2kCn-KmsMvUZm6nzn53IMuMt_gH2X2QQOKzMk-BiCkRaA' }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => minus()}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/tqFgB3GzYI9qdW7Hx0dmfsUcRSLUp7vVUoFYbCM4gp3HbQN-dmRd__VNmmw7wpWGrHSlFpCucF_brPVkj8A5srucHhMsJBmed3uCZA' }}
        ></Image>
        <TouchableOpacity onPress={() => reset()}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://img.favpng.com/19/16/1/computer-icons-reboot-reset-png-favpng-mGHHcjcZHFyMyHxQrmbfkzBaR.jpg' }}
          ></Image>
        </TouchableOpacity>
      </TouchableOpacity>

    </View >
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
