import React from 'react'
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.Navigation}>
            <button>
                Conheça a Linx
            </button>
            <button>
                Ajude o algoritmo
            </button>
            <button>
                Seus produtos
            </button>
            <button>
                Compartilhe
            </button>
        </div>
    )
}