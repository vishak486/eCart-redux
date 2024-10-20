import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,dataFromView)=>{
            const existingProduct=state.find(item=>item.id==dataFromView.payload.id)
            if(existingProduct)
            {
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
                const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
                state={...remainingProducts,existingProduct}
            }
            else
            {
                state.push({...dataFromView.payload,quantity:1,totalPrice:dataFromView.payload.price})
            }
        },
        removeCartItem:(state,dataFromCart)=>{
            return state.filter(item=>item.id!=dataFromCart.payload)
        },
        incQuantity:(state,actionFromCart)=>{
            const existingProduct=state.find(item=>item.id==actionFromCart.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=actionFromCart.payload.id)
            state={...remainingProducts,existingProduct}
        },
        decQuantity:(state,actionFromCart)=>{
            const existingProduct=state.find(item=>item.id==actionFromCart.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=actionFromCart.payload.id)
            state={...remainingProducts,existingProduct}
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer