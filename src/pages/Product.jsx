import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHD from "../component/ProductHD";
import ProductDisplay from "../component/ProductDisplay";
import ProductDescription from "../component/ProductDescription";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHD product={product} />
        <ProductDisplay product={product}/>
        <ProductDescription/>
      </div>
    </section>
  );
};

export default Product;
