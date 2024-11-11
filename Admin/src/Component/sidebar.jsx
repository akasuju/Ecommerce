import { Link } from "react-router-dom";
import addproduct from "../Assets/addProduct.png";
import productlist from "../Assets/productList.png";
const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-2-60 lg:h-screen lg:justify-start lg:pl-6">
      <Link to={"/addproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-16">
          <img src={addproduct} alt="" height={55} width={55} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={"/ListProduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 xs:w-44 medium-16">
          <img src={productlist} alt="" height={55} width={55} />
          <span>Product List </span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
