/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { createContext } from "react"

export const ShopContext = createContext (null) 
 const ShopContextProvider = (props) => {
const contextValue = {all_products};
return (
    <shopContext.Provider value={contextValue}>
        {props.children}
    </shopContext.Provider>
)
 }
 export default ShopContextProvider;

