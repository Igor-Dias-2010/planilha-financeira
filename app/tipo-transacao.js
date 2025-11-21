"use client"

import { useState } from 'react'

export default function TipoTransacao({ tipo, setTipo }) {

    const handleTipoChange = e => setTipo(e.target.value)
    return (
        <div className='tipo-transacao'>
            <label htmlFor="TipoTransacao">Selecione o tipo da transação:</label>
            <select id='TipoTransacao' value={tipo} onChange={handleTipoChange}>
                <option value="" disabled>Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
        </div>
    )
}