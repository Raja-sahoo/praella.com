import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart,  decreaseCartClick, GetcartTotal, removeFromCart } from '../features/cartSlice';
import "./cart.css"
export const Cart = (props) => {
  const {itemCnt} = props
const cart = useSelector((state)=>state.cartSli)
const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(GetcartTotal())
 }, [cart, dispatch])




const RemoveProduct =(item)=>{
dispatch(removeFromCart(item))
}
const handelIncrease =(item)=>{
  dispatch(addToCart(item))
}

const handelDecrz = (item)=>{
dispatch(decreaseCartClick(item))
}


const handelCheckOut =()=>{
  alert("don't worry we will do it Soon")
}

  return <>
  <div className='cart-container'>
    <p className='text-center mt-4 my-4'>Your bag  <span>{`(${itemCnt ? itemCnt: 'empty' } item)`}</span></p>
    {
      cart.cartItem.length === 0 ? (
        <div className='cart-empty text-center'>
          <p>Your Cart is Currently Empty </p>
          <div className="start-shopping">
          </div>
        </div>
      ): (
        <div>
        {
          <div className='render-cart '>
{/* static heading above */}
            <div className='cart-item'>
                {cart.cartItem.map(item=> (
                <div className='eachItem' key={item.id}>
                <div className='cart-each'>
                    <div className='img-hole d-flex'>
                      <img src={item.images.map(item=>item.src)} className="img-fluid " alt={item.name}/>
                      
                      <div className='product-desc'>
                      <h3>{item.title.slice(0,12)}</h3>
                      <div className='cart-product-quantity'>
                        <button onClick={()=>handelDecrz(item)}>-</button>
                        <div className='count'>{item.cartQuantity}</div>
                        <button onClick={()=>handelIncrease(item)}>+</button>
                      </div>

                    </div>



                    </div>

                    

                      <div className='cart-product-total-price'>
                        <p><button className='btn d-block' onClick={() => RemoveProduct(item)}>X</button></p>
                        <p>${item.variants[0].price * item.cartQuantity}</p>
                      </div>
                </div>

                </div>
                ) )}

            </div>
{/* total cart description above */}
                  <div className='cart-summery'>
                  
                    <div className='check-out-section'>
                      <div className='sub-total'>
                        <span>SubTotal</span>
                        <span className='sub-amout'>$ {cart.cartTotalAmount}</span>
                      </div>
                      
                      <button onClick={handelCheckOut} className='checkOut'>CheckOut</button>
                      <p className='mt-3 mx-5'>Have a promo code? Enter your code at checkout. Shipping & taxes are calculated during checkout.</p>
                      <div className="continue-shopping">
                      </div>
                    </div>
                  </div>


          </div>
        }
        </div>
      )
    }
  </div>
  
  </>
}
