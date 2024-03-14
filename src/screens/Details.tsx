import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, View } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

const Details = () => {
  const route = useRoute();
  const { title, description, price, images } = route.params as ProductDTO;
  const { addProduct } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      
        <Image resizeMode="center"
          style={{ width: "100%", height: 100, margin: 20, borderRadius: 20}}
          source={{ uri: images[0] }} 
        />
        <Text style={styles.infoText}>{title}</Text>
        <Text style={styles.infoText}>{description}</Text>
        <Text style={styles.infoText}>Price: {price}</Text>
        <Button title="Adicionar" onPress={() => addProduct(route.params as ProductDTO)} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  

  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Details;
