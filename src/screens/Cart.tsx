
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import { CartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Products";

const Cart = () => {
  const { cart, getCart, removeProduct } = useContext(CartContext);
  console.log('cart', cart)

  useEffect(() => {
    getCart()
  }, [])

  return (
    <View style={styles.container}>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>

            <Image
              resizeMode="center"
              style={{ width: "100%", height: 100, margin: 20 }}
              source={{ uri: item.product.images[0] }}
            />
            <View>
              <Text>{item.product.title}</Text>
              <Text>${item.product.price}</Text>
              <Text>Quantidade: {item.quantity}</Text>
            </View>

            <Button title="Excluir" onPress={() => removeProduct(item.product.id)} />
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
  itemCard: {
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    flex: 1,
    margin: 10,
    elevation: 5
  },

});

export default Cart;