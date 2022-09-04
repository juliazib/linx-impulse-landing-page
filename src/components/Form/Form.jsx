import React from 'react'
import s from './Form.module.css'

export const Form = () => {
    return ( 
    <div>
        <form className={s.Form}>
            <label htmlFor='name'>Seu nome:</label>
            <input id='name' type='text' className={s.textInput}/>

            <label htmlFor='email'>E-mail</label>
            <input id='email' type='text' className={s.textInput}/>

            <label htmlFor='cpf'>CPF:</label>
            <input id='cpf' type='text' className={s.textInput}/>

            <div className={s.radioInput}>
                <input type='radio' id='masculino' name='radio' value='Masculino' />
                <label htmlFor="masculino">Masculino</label>
                <input type='radio' id='feminino' name='radio' value='Feminino' />
                <label htmlFor="feminino">Feminino</label>
            </div>

            <button>
                Enviar
            </button>
        </form>
    </div>
    )
}