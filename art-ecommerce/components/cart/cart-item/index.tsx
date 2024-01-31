import Image from "next/image";

import styles from "./CartItem.module.scss";
import { currencyFormat } from "../../../utils/numericFormatters";

interface CartItemProps {
  product: {
    discount: number;
    imageName: string;
    name: string;
    price: number;
  };
  removeItemFromCart: (product: {
    discount: number;
    imageName: string;
    name: string;
    price: number;
  }) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeItemFromCart }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productDetails}>
        <Image
          src={`/images/albums/${product.imageName}`}
          width={125}
          height={125}
          alt={product.name}
        />
      </div>
      <div className={styles.price}>
        {currencyFormat(product.price)}
        <button onClick={() => removeItemFromCart(product)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
