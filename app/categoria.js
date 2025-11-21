"use client"

import { useState } from 'react'

export default function Categoria({ categoria, setCategoria }) {

    const handleCategoriaChange = e => setCategoria(e.target.value)
    return (
        <div className='categoria'>
            <label htmlFor="categoria">Selecione a categoria:</label>
            <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
                <option value="" disabled>Selecione</option>
                <option value="salario">Salário</option>
                <option value="freelance">Freelance</option>
                <option value="outro">Outro</option>
            </select>
        </div>
    )
}