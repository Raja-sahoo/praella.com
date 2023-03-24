import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// I have used toast for the sweet alert 
const initialState = {
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    totalCartQuantity: 0,
    cartTotalAmount: 0
}
// initialState is our start state which is empty [] after after addTocart click action from product.js then it will get updated & stored in local storage after parse
// here creatslice method taken 3 properties, 1st one is name of the slice, 2nd one is state, 3rd is the reducer, inside reducer the all event action method called,
//each function taken 2 argument one is state which is our initialState data, & action performed to updated the state 

const cartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity += 1;
                toast.info(`${state.cartItem[itemIndex].title} got increased`, {
                    position: "bottom-left"
                })

            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItem.push(tempProduct);
                toast.success(`${action.payload.title} added to Cart`, {
                    position: "top-right"
                })
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },

        removeFromCart(state, action) {
            const nextItem = state.cartItem.filter(item => item.id !== action.payload.id);
            state.cartItem = nextItem;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
            toast.error(`${action.payload.title} removed from the cart`, {
                position: "top-right"
            })
        },

        decreaseCartClick(state, action) {
            const indexItem = state.cartItem.findIndex(item => item.id === action.payload.id)
            if (state.cartItem[indexItem].cartQuantity > 1) {
                state.cartItem[indexItem].cartQuantity -= 1
            } else if (state.cartItem[indexItem].cartQuantity === 1) {
                const nextItem = state.cartItem.filter(item => item.id !== action.payload.id);
                state.cartItem = nextItem;
                alert(`${action.payload.title} product will get removed`)
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        },

        clearCartBtn(state, action) {
            state.cartItem = []
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        },

        GetcartTotal(state, action) {
            const { total, totalQuantity } = state.cartItem.reduce((cartToto, eachObjectItem) => {
                const itemTotal = eachObjectItem.variants[0].price * eachObjectItem.cartQuantity;
                cartToto.total += itemTotal
                cartToto.totalQuantity += eachObjectItem.cartQuantity

                return cartToto
            },
                {
                    total: 0,
                    totalQuantity: 0
                })
            state.cartTotalAmount = total;
            state.totalCartQuantity = totalQuantity;


        }

    }
})
// here all action exported after destructred & also reducer exported below
export const { addToCart, removeFromCart, decreaseCartClick, clearCartBtn, GetcartTotal } = cartSlice.actions;
export default cartSlice.reducer; 
