
import { configureStore } from "@reduxjs/toolkit"
import cartreducer from './CardSlice'

const Appstore=configureStore({
    reducer:{
        cart:cartreducer
    }
})
export default Appstore