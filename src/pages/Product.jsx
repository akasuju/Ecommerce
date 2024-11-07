import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import ProductHD from "../component/ProductHD";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <section>
      <div>
        <ProductHD product={product} />
      </div>
    </section>
  );
};

export default Product;