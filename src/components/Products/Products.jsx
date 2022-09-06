import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card.jsx'

export const Products = () => {

    const [page, atPage] = useState(1)
    const [product, setProduct] = useState([])

    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

    const getProduct = async () => {
        try {
            let res = await fetch(url)
            let data = await res.json()
            setProduct([...product, ...data.products]) 
        }
        catch(error) {
            console.log(error)
        }
    }

    const showMoreProducts = () => {
        atPage(page + 1)
    }

    useEffect(() => {
        getProduct()
    }, [page])

    return (
        <div>
            <div>
            {product.map((product) => {
            return <Card 
            image= {product.image}
            title= {product.name}
            description= {product.description}
            oldPrice={product.oldPrice}
            newPrice= {product.price}
            numberOfInstallments= {product.installments.count}
            installmentValue= {product.installments.value}
        />
        })}
            </div>

            <button onClick={showMoreProducts}>
                Ainda mais produtos aqui!
            </button>
    </div>
    )
}