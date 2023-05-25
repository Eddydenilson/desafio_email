import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    formContext: {
        width: "50%",
        height: "55%",
        bottom: 0,
        backgroundColor: "#808080",
        alignItems: "center",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 80,
        borderBottomEndRadius: 60,
        borderBottomLeftRadius: 80,

    },

    form: {
        width: "98%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        color: "#f6f6f6",

    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 40,
    },

    buttonCalculator: {
        borderRadius: 500,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: "90%",
        backgroundColor: "#ff8210",
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 30,
        marginTop: 30,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#000080",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});

export default styles;