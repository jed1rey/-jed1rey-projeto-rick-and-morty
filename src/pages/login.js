import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigation = useNavigation()

    const handleLogin = () => {
        if (email === '' && password === ''){
            navigation.navigate('main')
        } else {
            alert('E-mail ou senha inválidos!')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={ styles.input }
                placeholder="E-mail"
                placeholderTextColor="#39ff14"
                value={email}    
                onChangeText={setEmail}
            />
            <TextInput
                style={ styles.input }
                placeholder="Senha"
                placeholderTextColor="#39ff14"
                secureTextEntry={true}
                value={password}    
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={ styles.buttonText }>Entrar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a18',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ff00ff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#1b0033',
        color: '#fff'
    },
    button: {
        backgroundColor: "#ff00ff",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#00ffff',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default Login;
