"use client"

import { useState } from 'react'
import { Trash2, Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';


export default function SpreadSheet() {
    const [message, setMessage] = useState('')

    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('R$ 0,00')

    const [inflow, setInflow] = useState(0)
    const [outflow, setoutflow] = useState(0)
    const [capital, setCapital] = useState(0)

    const handleCategoryChange = e => setCategory(e.target.value)
    const handleTypeChange = e => setType(e.target.value)
    const handleInputChange = e => {
        let value = e.target.value
        value = value.replace(/\D/g, "")
        const numericValue = Number(value) / 100
        const formatedValue = numericValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
        setAmount(formatedValue)
    }
    const addValue = () => { }
    return (
        <div>
            <h1>Financial spreadsheet</h1>
            <h2>Organize your finances here</h2>
            <div className='spreadsheet'>
                {message && <p>{message}</p>}
                <div className='inflow'>
                    <h2><TrendingUp /> Inflow</h2>
                    {inflow && <p>{inflow}</p>}
                </div>
                <div className='outflow'>
                    <h2><TrendingDown />Outflow</h2>
                    {outflow && <p>{outflow}</p>}
                </div>
                <div className='balance'>
                    <h2><DollarSign />Balance</h2>
                    {capital && <p>{capital}</p>}
                </div>
                <h3>New transaction</h3>
                <div className='input-field'>
                    <label htmlFor="transaction-type">Transaction type:</label>
                    <select name="transaction-type" id='transaction-type' value={type} onChange={handleTypeChange}>
                        <option value="" disabled>Select</option>
                        <option value="inflow">Inflow</option>
                        <option value="outflow">Outflow</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={category} onChange={handleCategoryChange} >
                        <option value="" disabled>Select</option>
                        <option value="Freelance">Freelance</option>
                        <option value="other">Other</option>
                        <option value="salary">salary</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label htmlFor="amount">Amount:</label>
                    <div className='input-wrapper'>
                        <input type="text" id='amount' inputMode='numeric' value={amount} onChange={handleInputChange} />
                    </div>
                    <button onClick={addValue}> <Plus size={15} /> Add transaction</button>
                </div>
            </div>
        </div>
    )
}