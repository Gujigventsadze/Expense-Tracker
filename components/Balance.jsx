import { useContext } from "react"
import { TransactionContext } from "../GlobalContext/TransactionContext"

const Balance = () => {

    const {transactions} = useContext(TransactionContext)

    const totalIncome = transactions
        .filter(transaction => transaction.type === "income")
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0)
        
    const totalExpense = transactions
        .filter(transaction => transaction.type === "expense")
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0)

    const totalBalance = totalIncome - totalExpense

    return (
        <div className="balance-container">
            <div className="text">Your Balance</div>
            <div className="balance">${totalBalance}</div>
        </div>
    )
}

export default Balance