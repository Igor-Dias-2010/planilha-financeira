"use client"

import { useState } from 'react'

import TitleBar from './title-bar'
import TipoTransacao from './tipo-transacao'
import Categoria from './categoria'
import Observacao from './observacao'
import Valor from './valor'
import Adicionar from './adicionar-trans;'

export default function Spreadsheet() {
    const [tipo, setTipo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [obs, setObs] = useState('')
    const [valor, setValor] = useState('R$ 0,00')
    const [transacoes, setTransacoes] = useState([])

    const formatarData = isoString => {
        const data = new Date(isoString)
        return data.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    }
    return (
        <div className='spreadsheet'>
            <TitleBar />

            <TipoTransacao tipo={tipo} setTipo={setTipo} />
            <Categoria categoria={categoria} setCategoria={setCategoria} />
            <Observacao obs={obs} setObs={setObs} />
            <Valor valor={valor} setValor={setValor} />
            <Adicionar tipo={tipo} categoria={categoria} obs={obs} valor={valor} transacoes={transacoes} setTransacoes={setTransacoes} setTipo={setTipo} setCategoria={setCategoria} setObs={setObs} setValor={setValor} />

            <hr />
            <h2>Histórico de transações:</h2>

            <ul>
                {transacoes.map(tx => (
                    <li key={tx.id}>
                        {tx.tipo} - {tx.categoria} - {tx.obs || '-'} - {tx.valor} - {formatarData(tx.createdAt)}
                    </li>
                ))}
            </ul>
        </div>
    )
}