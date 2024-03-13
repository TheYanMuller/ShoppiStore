import { SafeAreaView, StyleSheet, Text, Image, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../types/Products";
import { CartContext } from "../contexts/CartContext";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const route = useRoute()
  const { title,
    description,
    price,
    images } = route.params as ProductDTO
  const { addProduct } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ width: '50%', height: 100, borderRadius: 5  }} source={{ uri: images[0] }} />
      <Text style={styles.informacoes}>
        {title}
        {description}
        {price}
      </Text>
      <Button title="Adicionar" onPress={() => addProduct(route.params as ProductDTO)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#606060",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    color: "#252525",
    fontSize: 26,
    fontWeight: "bold",
  },
  informacoes: {
    display: "flex",
  }
});

export default Details;