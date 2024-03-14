import { Image, StyleSheet, Text, TouchableOpacity, View, Button} from "react-native";
import React, {useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";
import { CartContext } from "../contexts/CartContext";
interface Props {
  product: ProductDTO;
}
const ItemCard = ({ product }: Props) => {
  const navigation = useNavigation<any>();
  const { addProduct } = useContext(CartContext);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", product)}>
      
        <View style={styles.containerItem}>
          <Image
            resizeMode="center"
            style={{ width: "100%", height: 100, margin: 20 }}
            source={{ uri: product.thumbnail }}
          />

          <View>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.prices}>$ {product.price}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => addProduct(product)}>
              <Text style={styles.txt}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
    containerItem:{
      margin: 10,
      padding:10,
      backgroundColor:"#fff",
      flex: 1,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5
    },
    prices:{
      fontSize: 15,
      fontWeight: 'bold'
    },
    btn:{
      padding: 10,
      backgroundColor: "#3E7786",
      borderRadius: 5,
      
    },
    txt:{
      color: "white",
      fontWeight: "bold"
    }

});
