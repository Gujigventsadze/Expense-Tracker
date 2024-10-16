import { useContext } from "react"
import Transaction from "./Transaction"
import { TransactionContext } from "../GlobalContext/TransactionContext"

const History = () => {

    const {transactions} = useContext(TransactionContext)


    return (
        <div className="history-container">
            <h3>Transaction History</h3>
            <div className="horizontal-line"></div>
            <div className="transaction-container">
                {transactions.map((transaction, index) => (
                    <Transaction
                        key ={index}
                        type={transaction.text}
                        amount={transaction.type === "income" ? `+${transaction.amount}`: `-${transaction.amount}`}
                        color={transaction.type === "income" ? "green" : "red"}
                    />
                ))}

                {/* <Transaction type="Cash" amount ="500" color="Green" /> */}
            </div>
        </div>
    )
}

export default History