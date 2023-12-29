import axios from "axios";
export async function productsData() {
  const products = await axios.get(
    // "https://fakestoreapiserver.reactbd.com/products"
    "https://fakestoreapi.com/products/category/electronics"
  );
  return products;
}
