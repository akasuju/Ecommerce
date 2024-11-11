import upload_area from '../assets/upload_area.svg'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'

const AddProduct = () => {

const [image, setImage] = useState(false);
const imageHandler = (e) => {
  setImage(e.target.files[0]);
}

  return (
    <div className="p-8 box-order bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input type="text" name="name" placeholder="Type Here" className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md " />
      </div><div className="mb-3">
        <h4 className="bold-18 pb-2">Price:</h4>
        <input type="text" name="old_price" placeholder="Type Here" className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md " />
      </div><div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input type="text" name="new_price" placeholder="Type Here" className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md " />
      </div><div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input type="text" name="name" placeholder="Type Here" className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md " />
      </div>
      <div className='mb-2 flex items-center gap-x-4'>
        <h4 className='bold-18 pb-2'>Product Category:</h4>
        <select name="category" id="" className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none">
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" className='2-20 rounded-sm inline-block' />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden className='bg-primary max-2-30 w-full py-3 px-4' />
      </div>
      <button className='btn_dark_rounded mt-2 flexCenter gap-x-1'> <MdAdd/> Add Product</button>
    </div>
  )
}

export default AddProduct