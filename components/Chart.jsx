import { useContext } from "react"
import "./Chart.css"
import { TransactionContext } from "../GlobalContext/TransactionContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const Chart = () => {

    const {transactions} = useContext(TransactionContext)

    const chartData = []

    let totalIncome = 0
    let totalExpense = 0

    transactions.map((transaction) => {
        const amount = parseFloat(transaction.amount)
        if (transaction.type === "income") {
            totalIncome += amount
            chartData.push({
                "time": transaction.time,
                "income": totalIncome,
                "expense": totalExpense
            })
        } else if(transaction.type === "expense") {
            totalExpense += amount
            chartData.push({
                "time": transaction.time,
                "income": totalIncome,
                "expense": totalExpense
            })
        }
    })

    console.log(chartData)

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#82ca9d" name="Income" />
                    <Line type="monotone" dataKey="expense" stroke="#ff6961" name="Expense" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart