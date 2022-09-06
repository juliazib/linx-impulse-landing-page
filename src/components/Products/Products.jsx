import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card.jsx'
import { SectionTitle } from '../SectionTitle/SectionTitle.jsx'
import s from './Products.module.css'

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
        catch (error) {
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
        <div className={s.Products}>
            <SectionTitle
                title="Sua seleção especial"
            />
            <div className={s.Cards}>
                {product.map((product, index) => {
                    return <Card
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        oldPrice={product.oldPrice}
                        newPrice={product.price}
                        numberOfInstallments={product.installments.count}
                        installmentValue={product.installments.value}
                        key={index}
                    />
                })}
            </div>

            <button className={s.moreProductsButton} onClick={showMoreProducts}>
                Ainda mais produtos aqui!
            </button>
        </div>
    )
}