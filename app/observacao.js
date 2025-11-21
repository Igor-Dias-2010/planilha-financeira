"use client"

import { useState } from 'react'

export default function Observacao({ obs, setObs }) {

    const handleObservacaoChange = e => setObs(e.target.value)
    return (
        <div className='obs'>
            <label htmlFor="observacao">Observação:</label>
            <input type="text" id='observacao' placeholder='Ex.: Supermercado' value={obs} onChange={handleObservacaoChange} />
        </div>
    )
}