import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
  const storedCart = getShoppingCart();
  const savedCard = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
    savedCard.push(addedProduct);
  }
  return savedCard;
};

export default cartProductLoader;
