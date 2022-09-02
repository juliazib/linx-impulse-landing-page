import React from 'react'
import s from './Header.module.css'
import { Navigation } from '../Navigation/Navigation.jsx'

export const Header = () => {
    return (
        <div className={s.Header}>
            <p>
                uma seleção de produtos
            </p>
            <h1>
                especial para você
            </h1>
            <p>
                Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
            </p>

            <Navigation />
        </div>
    )
}