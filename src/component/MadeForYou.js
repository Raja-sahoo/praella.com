import React from 'react'
import {Link} from "react-router-dom"
import "./product.css"
export const MadeForYou = () => {
  return (
    <div className='zigzag px-5 my-5'>
        <div className=''>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mdfsec'>
                        <h3>Made For You</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  pulvinar ac tortor imperdiet commodo.</p>
                        <button onClick={()=>(alert("Soon we'll Learn about it"))} className='addCart learmore'>Learn More</button>
                        
                              <div>
                                  <img src='https://res.cloudinary.com/dmglch0ad/image/upload/v1679662597/products/joyness_v99vqb.png' className='img-fluid' title='Girl On Mobile' alt="Girl On Mobile" />
                              </div>
                    </div>
                    
                </div>
                <div className='col-md-8'>
                      <div className='secondHalf'>
                          
                              <div className='mid-Point'>
                                  <div className='iamImg'>
                                      <img src='https://res.cloudinary.com/dmglch0ad/image/upload/v1679662597/products/fashion_inoee2.png' className='img-fluid float-end' title="Girl at it's Beauty" alt="Girl at it's Beauty" />
                                  </div>
                                  <div className='iamImg'>
                                      <img src='https://res.cloudinary.com/dmglch0ad/image/upload/v1679664190/products/lights-life_h8k8sg.png' className='img-fluid' title='Light of Life' alt="Light of Life" />
                                  </div>
                              </div>{/* for middile porttion  */}
                              <div className='end-point'>
                                  <div className='iamImg'>
                                      <img src='https://res.cloudinary.com/dmglch0ad/image/upload/v1679662597/products/shoppingsell_gnjbw8.png' className='img-fluid' title="Girl at it's Beauty" alt="Girl at it's Beauty" />
                                  </div>
                                  <h3>FIND YOUR SPARKLE.</h3>
                                  <p><Link to="/">SHOP OUR PRODUCTS &gt;</Link></p>
                              </div> {/* for last porttion  */}
                          
                      </div>
                    



                </div>
            </div>
        </div>
    </div>
  )
}
