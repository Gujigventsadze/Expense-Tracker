import "./Transaction.css"


const Transaction = (props) => {
    return (
        <div className="transaction-info">
            <div className="type">{props.type}</div>
            <div className="quantity">{props.amount}</div>
            <div className="red-green-line" style={{backgroundColor: props.color}}></div>
        </div>
    )
}

export default Transaction