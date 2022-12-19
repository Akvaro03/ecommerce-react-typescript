import React, { useMemo, useState } from 'react'
import { cart } from '../types/types';

const CartContex = React.createContext<cart>({
    name : "",
    products: 0,
}); 


export let CartProvider = ({children}:{children:any}) => {
    const [name, setName] = useState('')    
    const [products, setProducts] = useState(0)

    let values = useMemo(() => {
        return ({
            name: name,
            products: products
        })
    }, [name,products])

    return <CartContex.Provider value={values} > {children}</CartContex.Provider>
}

export let useCart = () => {
    const context = React.useContext(CartContex)
    if (!context) {
        throw new Error('debe estar dentro del context')
    }
    return context;
} 