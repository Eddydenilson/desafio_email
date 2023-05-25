
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import resultIbd from "./resultIbd/index.js";
import styles from "./style.js";

export default function Form() {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [numero, setNumero] = useState(null)
    const [bd, setBd] = useState(null)
    const [textButton, setTextButton] = useState("Aguardando Dados...")

    function validationBD() {
        if (nome != null && email != null && numero != null) {
            setNome(null)
            setNumero(null)
            setEmail(null)


            setMessageBD("A média é igual a:")
            setTextButton("Reinsira os seus Dados")
            return
        }
        setBd(null)
        setTextButton("Dados")

    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Insira seu nome:" keyboardType="" />

                <Text style={styles.formLabel}>Email:</Text>
                <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="insira seu email" keyboardType="" />

                <Text style={styles.formLabel}>Numero</Text>
                <TextInput style={styles.input} onChangeText={setNumero} value={numero} placeholder="insira seu numero" keyboardType="" />

                <TouchableOpacity style={styles.buttonCalculator} onPress={() => { validationBD() }}>

                </ TouchableOpacity>


            </View>

        </View>
    )

}
