import React from 'react'
import s from './Form.module.css'
import { validateEmail, validateCPF } from './FormValidation.jsx'
import { useState } from 'react'

export const Form = () => {
    const [input, setInput] = useState({})

    const handleValidationResults = (event) => {
        event.preventDefault();
    
        const { CPF, email } = input;
        
            if(!validateEmail(email) && !validateCPF(CPF)) {
                alert('Revise os campos de e-mail e CPF. Suas informações são inválidas.');
                return;
              }
              else if(!validateCPF(CPF)) {
                alert('Insira um CPF válido.')
              }
              else if(!validateEmail(email)) {
                alert('Insira um e-mail válido.')
              }
              else if(validateEmail(email) && validateCPF(CPF)) {
                alert('Cadastro feito com sucesso');
                window.location.reload();
              }

        
      }

    return ( 
    <div>
        <form className={s.Form} onSubmit={handleValidationResults}>
            <label htmlFor='name'>Seu nome:</label>
            <input required id='name' type='text' className={s.textInput}/>

            <label htmlFor='email'>E-mail</label>
            <input required id='email' type='text' className={s.textInput} onChange={e =>
              setInput({ ...input, email: e.target.value })
            }/>

            <label htmlFor='cpf'>CPF:</label>
            <input required id='cpf' type='text' className={s.textInput} onChange={e => setInput({...input, CPF: e.target.value})}/>

            <div className={s.radioInput}>
                <input required type='radio' id='masculino' name='radio' value='Masculino' />
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