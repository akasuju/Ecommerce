import AddProduct from '../Component/AddProduct'
import ListProduct from '../Component/ListProduct'
import Sidebar from '../Component/sidebar'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='lg:flex'>
        <Sidebar />
    <Routes>
    <Route path='/addproduct' element={<AddProduct />}/>
    <Route path='/listproduct' element={<ListProduct />}/>
    </Routes>
    </div>
  )
}

export default Admin