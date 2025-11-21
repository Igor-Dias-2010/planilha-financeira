"use client"

import { useState } from 'react'
import { Trash2, Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';


export default function SpreadSheet() {
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')

    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('R$ 0,00')

    const [transactions, setTransactions] = useState([])

    const isValidDate = (dateString) => {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

        const [day, month, year] = dateString.split('/').map(Number)

        if (month < 1 || month > 12) return false

        const daysInMonth = new Date(year, month, 0).getDate()

        if (day < 1 || day > daysInMonth) return false;

        return true;
    }

    const handleDateChange = e => {
        let value = e.target.value.replace(/\D/g, "")

        if (value.length > 8) value = value.slice(0, 8)

        if (value.length >= 5) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`
        } else if (value.length >= 3) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`
        }
        setDate(value)
    }
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
    const addValue = () => {
        if (!type || !category || amount === "R$ 0,00" || !isValidDate(date)) {
            setMessage("Fill in all fields before adding!")
            setTimeout(() => setMessage(""), 3000)
            return
        }
        const newTransaction = {
            id: Date.now(),
            type,
            category,
            amount,
            date,
        }
        setTransactions(prev => [...prev, newTransaction])

        setType('')
        setCategory('')
        setAmount("R$ 0,00")
        setDate('dd/mm/yyyy')
        setTimeout(() => setMessage(''), 3000)
    }
    return (
        <div>
            <h1>Financial spreadsheet</h1>
            <h2>Organize your finances here</h2>
            <div className='spreadsheet'>
                {message && <p>{message}</p>}
                <div className='inflow'>
                    <h2><TrendingUp /> Inflow</h2>
                </div>
                <div className='outflow'>
                    <h2><TrendingDown />Outflow</h2>
                </div>
                <div className='balance'>
                    <h2><DollarSign />Balance</h2>
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
                <div className='input-field'>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={category} onChange={handleCategoryChange} >
                        <option value="" disabled>Select</option>
                        <option value="Freelance">Freelance</option>
                        <option value="salary">salary</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label htmlFor="amount">Amount:</label>
                    <div className='input-wrapper'>
                        <input type="text" id='amount' inputMode='numeric' value={amount} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='input-field'>
                    <label htmlFor="date">Date:</label>
                    <div className='input-wrapper'>
                        <input type="text" id='date' inputMode='numeric' value={date} onChange={handleDateChange} placeholder='dd/mm/yyyy' />
                    </div>
                </div>
                <button onClick={addValue}> <Plus size={15} /> Add transaction</button>
                <div className='transaction-list'>
                    <h3>Transactions</h3>

                    {transactions.length === 0 && <p>No transations yet.</p>}

                    {transactions.map(t => (
                        <div key={t.id} className='transaction'>
                            <p><strong>{t.type}</strong> - {t.category} - {t.amount} - {t.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}       