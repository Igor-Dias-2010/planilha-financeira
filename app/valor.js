"use client"

import { useState } from 'react'

export default function Valor({ valor, setValor }) {

    const handleValorChange = e => {
        let raw = e.target.value

        let onlyNums = raw.replace(/\D/g, '')

        if (!onlyNums) {
            setValor('')
            return
        }

        let value = Number(onlyNums) / 100

        let formatted = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        setValor(formatted)
    }

    return (
        <div className='valor'>
            <div className='input-field'>
                <label htmlFor="valor">Digite o valor:</label>
                <input type="text" placeholder='R$ 0,00' id='valor' value={valor} onChange={handleValorChange} className='valorInput' />

            </div>
        </div>
    )
}