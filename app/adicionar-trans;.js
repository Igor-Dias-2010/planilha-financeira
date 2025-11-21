"use client"

import { useState } from 'react'

export default function Adicionar({ tipo, categoria, obs, valor, transacoes, setTransacoes, setTipo, setCategoria, setObs, setValor
}) {
    const handleSalvar = () => {
        if (!tipo || !categoria || !valor) {
            alert("Preencha tudo antes de salvar.")
            return
        }

        const novaTransacao = {
            id: Date.now(),
            tipo,
            categoria,
            obs,
            valor,
            createdAt: new Date().toISOString()
        }

        setTransacoes([...transacoes, novaTransacao])

        setTipo('')
        setCategoria('')
        setObs('')
        setValor('')
    }
    return (
        <div className='adicionar'>
            <button onClick={handleSalvar}>Salvar</button>
        </div>
    )
}