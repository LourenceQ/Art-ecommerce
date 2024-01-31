import { useState } from "react";
import ProductDetails from "../../../components/product-details";
import Cart from "../../../components/cart";
import styles from "./Catalog.module.scss";
import products from "./products.json";

interface Product {
  _id: string;
  imageName: string;
  name: string;
  price: number;
  // Add any other properties of the product here
}

interface CartItem {
  _id: string;
  imageName: string;
  name: string;
  price: number;
  // Add any other properties of the product here
}

interface Cart {
  _id: string;
  products: CartItem[];
}

function Catalog() {
  const [cart, setCart] = useState<Cart>({ _id: ``, products: [] });

  function addToCart(product: Product) {
    const newCart: Cart = {
      _id: cart._id,
      products: [...cart.products, { ...product }],
    };
    setCart(newCart);
  }

  // function addToCart(product: Product) {
  //   const newCart: Cart = { _id: cart._id }
  //   newCart.products = [...cart.products, { ...product }]
  //   setCart(newCart)
  // }

  function removeItemFromCart(product: CartItem) {
    const newCart: Cart = {
      _id: cart._id,
      products: cart.products.filter((item) => item !== product),
    };
    setCart(newCart);
  }

  // function removeItemFromCart(product: any) {
  //   const newCart = { _id: cart._id };
  //   newCart.products = cart.products.filter((item) => item !== product);
  //   setCart(newCart);
  // }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                {/* <ProductDetails product={product} addToCart={addToCart} /> */}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          {/* <Cart cartItems={cart.products} removeItemFromCart={removeItemFromCart} /> */}
        </div>
      </div>
    </>
  );
}


export default Catalog;
