import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import styles from './components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {

  const [text, setText] = useState('')
  const [decal, setDecal] = useState(1)
  const [result, setResult] = useState('')

  const cryptText = (text, decal) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    text = text.toLowerCase();
    let cryptedText = '';

    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (character === ' ') {
        cryptedText += ' ';
      } else if (alphabet.includes(character)){
        const index = alphabet.indexOf(character);
        const newIndex = (index + decal) %26;
        cryptedText += alphabet[newIndex];
      }  else {
        cryptedText += character;
      }
    }
    return cryptedText;
  }

  const decryptText = (text, decal) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    text = text.toLowerCase();
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (character === ' ') {
        decryptedText += ' ';
      } else if (character === "'"){
        decryptedText += "'";
      } else if (alphabet.includes(character)){
        const index = alphabet.indexOf(character);
        const newIndex = (index - decal +26) %26;
        decryptedText += alphabet[newIndex];
      } else {
        decryptedText += character;
      }
    }
    return decryptedText;
  }


  const clickCrypt = () => {
    setResult(cryptText(text, decal));
  }

  const clickDecrypt = () => {
    setResult(decryptText(text, decal));
  }

  const Copy = async () => {
    try {
      await Clipboard.setStringAsync(result);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la copie dans le presse-papiers :", error);
    }
  }

  const Paste = async () => {
    try {
      const clipboardContent = await Clipboard.getStringAsync();
      if (clipboardContent) {
        setText(clipboardContent);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération du texte depuis le presse-papiers :", error);
    }
  }

  const Reload = () => {
    setText('');
    setResult('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>César</Text>
      <View style={styles.top}>
        <TextInput 
          style={styles.input}
          placeholder='Votre texte ici'
          onChangeText={(text) => setText(text)}
          value={text}
          multiline={true}
          blurOnSubmit={true}
        />
        <TouchableOpacity style={styles.blueButton} onPress={Paste} >
          <Text style={styles.textButton}>Coller</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.decal}>
        <Text style={styles.decal}>Clé de cryptage</Text>
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={25}
            step={1}
            value={decal}
            onValueChange={(value) => setDecal(value)}
          />
        </View>
        <Text style={styles.decal}>{decal}</Text>
      </View>

      <View style={styles.middle}>
        <TouchableOpacity style={styles.redButton} title="Chiffrer" onPress={clickCrypt}>
          <Text style={styles.textButton}>Chiffrer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.redButton, styles.reloadButton]} title="Déchiffrer" onPress={Reload}>
          <Icon style={styles.textButton} name="refresh" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.redButton} title="Déchiffrer" onPress={clickDecrypt}>
          <Text style={styles.textButton}>Déchiffrer</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder='Résultat'
          value={result}
          multiline={true}
          editable={false}
          blurOnSubmit={true}
        />
        <TouchableOpacity style={styles.blueButton} onPress={Copy}>
          <Text style={styles.textButton}>Copier</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}