import React from 'react'
// import s from './Card.module.css'

export const Card = ({image, title, description, oldPrice, newPrice, numberOfInstallments, installmentValue}) => {
    return (
        <div>
            <div>
            <img src={image} />
            <p> {title}</p>
            <p>{description}</p>
            <p>{`De: R$${oldPrice}`}</p>
            <p>{`Por: R$${newPrice}`}</p>
            <p> {`ou ${numberOfInstallments}x de R$${installmentValue}`}</p>

            <button>Comprar</button>
            </div>
            
        </div>
    )
}