import { useContext } from "react"
import { TransactionContext } from "../GlobalContext/TransactionContext"

const Income = () => {

    const {transactions} = useContext(TransactionContext)

    const totalIncome = transactions
        .filter(transaction => transaction.type === "income")
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0)

    const totalExpense = transactions
        .filter(transaction => transaction.type === "expense")
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0)
    
    return (
        <div className="income-container">
            <div className="income">
                <p>Income</p>
                <div className="income-amount">$ {totalIncome.toFixed(2)}</div>
            </div>
            <div className="expense">
                <p>Expense</p>
                <div className="expense-amount">$ {totalExpense.toFixed(2)}</div>
            </div>
            <div className="middle-line"></div>
        </div>
    )
}

export default Income