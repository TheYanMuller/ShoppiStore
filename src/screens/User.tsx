import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, View } from "react-native";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { getUser, user, logout } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    
        <Image source={{ uri: user?.image }} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.username}>{user?.username}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <Text style={styles.gender}>{user?.gender}</Text>
        </View>
        <Button title="Sair" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  text: {
    alignItems: "center",
    marginBottom: 10
  },
  username: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  email: {
    marginBottom: 5,
    fontSize: 16
  },
  gender: {
    fontSize: 16
  }
});

export default User;
