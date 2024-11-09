/* eslint-disable react/prop-types */
import all_products from "../assets/all_products";
import { Item } from "../component/Item";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// eslint-disable-next-line no-unused-vars
export const Category = ({Category, banner}) => {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <img src={banner} alt="" className="block my-7 mx-auto" />
      </div>
      <div className="flexBetween my-8 mx-2">
        <h5><span>Showing 1-12</span>Out of 3 products</h5>
        <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-9001/15" >Sort By <MdOutlineKeyboardArrowDown/> </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols=3 xl:grid-cols-4 gap-6">
        {all_products.map((item)=>{
          if(Category===item.category){
            return (
              <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} 
              old_price={item.old_price}/>
            )
          }
        return null;
        })}
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded"></button>
        </div>
      </div>
    </section>
  )
}
export default Category;
