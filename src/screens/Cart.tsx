
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Products";

const Cart = () => {
  const { cart, getCart, removeProduct } = useContext(CartContext);
console.log('cart',cart)

useEffect(() => {
  getCart()
},[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.product.title}</Text>
            <Text>{item.product.price}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Button title="Excluir" onPress={() => removeProduct(item.product.id)}/>          
            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Cart;