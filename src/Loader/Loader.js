const productsAndCart = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  return products;
};

export default productsAndCart;
