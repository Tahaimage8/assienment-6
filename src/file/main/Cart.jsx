import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts}) => {
const totalPrice = carts.reduce((sum,item)=> sum +item.price, 0 );

const handlePayment= () =>{
    setCarts([])
     toast.success(`Payment successful! Total amount paid: $${totalPrice}`);
    
}
const handleDelete = (item)=> {
const filteredArray = carts.filter(c=> c.id !== item.id)
setCarts(filteredArray)
toast.error(`Item Deleted ${item.name}`);
}
// console.log(totalPrice)
    return (
<div className='p-10 mx-auto max-w-7xl'>
    
    <h1 className='text-2xl font-bold'>Your Cart</h1>
{

    carts.length ===0 ? <p className='text-center text-2xl p-5'>Cart is empty</p>: 
    <>
    <div className='space-y-5 mt-5'>
    {
        carts.map(item=>
    <div key={item.id} className='flex items-center justify-between border rounded-lg p-3'>
        <div className='flex items-center gap-3'>
                <div>
                <img className='h-20 w-20 object-contain' src={item.icon}/>
                </div>
                <div>
                <h2 className='text-2xl font-bold'>{item.name}</h2>
                <div className='text-xl font-bold'>${item.price}/Month</div>
                </div>
        </div>
           <div>     
            <button onClick={()=>handleDelete(item)} className='text-[#FF3980]'>Delete</button></div>
    </div>
)
}
</div>
    <div className='flex justify-between bg-[#ffffff] text-white p-5 mt-5 rounded-lg text-2xl'>

        <div className='text-[#627382]'>Total</div>
        <div className='text-[#101727]'>{totalPrice}</div>

    </div>
    <button onClick={handlePayment} className='btn w-full mt-5 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700'> Proceed to checkout</button>
    </>
}


</div>
    );
};

export default Cart;