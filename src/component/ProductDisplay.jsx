/* eslint-disable no-unused-vars */

import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import { MdStar } from 'react-icons/md'
const ProductDisplay = (props) => {
    const  product  = props;
  return (
   <section>
    <div className='flex flex-col fap-14 xl:flex-row'>
        <div className='flex gap-x-2'> 
            <div className='flex flex-col gap-[7px] flex-wrap'>
                <img src="{product_rt_1}" alt="prdtimg" className='max-h-[99px]' />
                <img src="{product_rt_2}" alt="prdtimg" className='max-h-[99px]' />
                <img src="{product_rt_3}" alt="prdtimg" className='max-h-[99px]' />
                <img src="{product_rt_4}" alt="prdtimg" className='max-h-[99px]' />
            </div>
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className='flex-col flex'>
            <h3 className='h3'>{product.name}</h3>
            <div className='flex gap-x-2 text-secondary medium-22'>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <p>(111)</p>
            </div>
            <div className='flex gap-x-6 medium-20 my-4'>
                <div className='line-through'>{product.old_price}</div>
                <div className='text-secondary'>{product.new_price}</div>
            </div>
            <div className='mb-4'>
                <h4 className='bold-16'>Select Size:</h4>
                <div className='flex gap-4 my-3'>
                    <div className='ring-2 ring-slate-900 h-10 2-10 flexcenter cursor-pointer'>s</div>
                    <div className='ring-2 ring-slate-900/10 h-10 2-10 flexcenter cursor-pointer'>M</div>
                    <div className='ring-2 ring-slate-900/10 h-10 2-10 flexcenter cursor-pointer'>L</div>
                    <div className='ring-2 ring-slate-900/10 h-10 2-10 flexcenter cursor-pointer'>XL</div>
                </div>
                <div className='flex flex-col gap-y-3 mb-4 max-2-[555px]'>
                    <button className='btn_dark_outline !rounded-none uppercase regular-14 tracking-wideset' >Add to Cart</button>
                    <button className='btn_dark_rounded !rounded-none uppercase regular-14 tracking-wideset'>Buy it now</button>
                </div>
                <p className='medium-16 text-tertiary'><span>category: </span>Women | Jacket | Winter</p>
                <p className='medium-16 text-tertiary'><span>Tags: </span>Modern | Latest</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default ProductDisplay