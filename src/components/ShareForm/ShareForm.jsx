import React from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import s from './ShareForm.module.css'
import { validateEmail } from '../Form/FormValidation'
import { useState } from 'react'

export const ShareForm = () => {
    const [friendEmail, setFriendEmail] = useState("")

    const handleFriendEmailValidation = (event) => {
        event.preventDefault()

        if (!validateEmail(friendEmail)) {
            alert('Insira um e-mail válido.')
            return
        }
        alert('Já mandamos as novidades para o seu amigo ;)')
        window.location.reload()
    }

    return <div className={s.ShareForm}>
        <SectionTitle
            title="Compartilhe a novidade"
        />

        <p>
            Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
        </p>

        <div>
            <form onSubmit={handleFriendEmailValidation} className={s.ShareFormForm}>
                <div className={s.ShareFormDivider}>
                    <div className={s.labelAndInput}>
                        <label htmlFor='friendName'>Nome do seu amigo:</label>
                        <input required id='friendName' type='text' className={s.ShareFormInput} />
                    </div>

                    <div className={s.labelAndInput}>
                        <label htmlFor='friendEmail'>E-mail:</label>
                        <input required id='friendEmail' type='text' className={s.ShareFormInput} onChange={e => setFriendEmail(e.target.value)}
                        />
                    </div>
                </div>
                <button className={s.ShareFormButton}>
                    Enviar
                </button>
            </form>
        </div>
    </div>
}