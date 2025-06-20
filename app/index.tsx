import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function SignUp(props: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Validate email and password format

  const [validEmail, setEmailValid] = useState<boolean>(false);
  const [validPassword, setPasswordValid] = useState<boolean>(false);

  useEffect(() => {
    if (email.indexOf("@") > 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <ThemedText style={styles.title}>Sign Up</ThemedText>
        <ThemedText>Email</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          onChangeText={(val) => setEmail(val)}
          value={email}
        />
        <ThemedText>Password</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="minimum 8 characters"
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={true}
        />
        <Pressable  style={ (validEmail && validPassword ) ? styles.button : styles.buttondisabled } 
                    disabled={ ( validEmail && validPassword ) ? false : true }>
          <ThemedText style={styles.buttonText}>Sign up</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 50,
    marginTop: 100,
    padding: 20,
  },
  input: {
    backgroundColor: "#edf2f8",
    padding: 5,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
   button: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#dfe7f5",
        padding: 5,
        borderRadius: 5,
    },
    buttondisabled: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#7e848c",
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
    },
});
