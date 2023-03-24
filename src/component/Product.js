import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Cart } from "./Cart"
import "./product.css"
export const Product = () => {
  const { totalCartQuantity } = useSelector(state => state.cartSli)


  const [data, showData] = useState([])
  const [isShown, setShown] = useState(false)
  const loadJsonData = useCallback(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => showData(data.products))
  }, [])
  useEffect(() => {
    loadJsonData()
  })
  const FourData = data.filter((object, index) => index < 4)
  const dispatcH = useDispatch()
  const handelAddtoCart = (item) => {
    dispatcH(addToCart(item))
  }


  const CartShow = (e) => {
    setShown(true)
  }
  const closeCart = () => {
    setShown(false)
  }

  return (
    <>
      <div className='home'>
        <div onClick={(e) => CartShow(e)}>
          <div className='nav-bag justify-content-end' id="cartBag" >
            <div className='BagQuan'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-handbag" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
              </svg>
              <span className='bag-quantity'>
                <span className='order'>{totalCartQuantity}</span>
              </span>
            </div>

          </div>
        </div>
        {FourData.length < 0 ? <p>Loading...</p> :
          <div className='mx-5 my-5'>
            <div className='page-logo mx-auto'>
              <img src='https://res.cloudinary.com/dmglch0ad/image/upload/v1679597098/products/Hulkapps_ccb5hs.png' className='img-fluid' title="Hulk App" alt="HulkApp Logo" />
            </div>
            <div className='header-desc'>
              <h1>Featured Collection</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Aliquam  pulvinar ac tortor imperdiet commodo.</p>
            </div>
            <div className='products'>
              {FourData?.map(item =>
                <div key={item.id} className="eachCardItem">
                  <img src={item.images.map(item => item.src)} alt={item.name} title={item.name} className="mx-auto d-block img-fluid" />
                  <div className='info'>
                    <p className='details'>{item.title.slice(0, 12)}</p>
                    <p className='price'>$ {item.variants[0].price}</p>
                  </div>
                  <button onClick={() => handelAddtoCart(item)} className='addCart'>Add to Cart</button>

                </div>
              )}

            </div>

          </div>
        }


        <div className='sideRight'>
        <div className={isShown ? "backdrop": "" }></div>
          <div className={isShown ? "ShowCart" : "HideCart"}>
            <div onClick={closeCart} className='btn btn-close cart'></div>
            <Cart itemCnt={totalCartQuantity} />
          </div>

        </div>
      </div>

    </>
  )
}
