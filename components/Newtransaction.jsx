import { useContext, useState } from "react";
import { TransactionContext } from "../GlobalContext/TransactionContext";

const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { text, amount, type };
    addTransaction(newTransaction);

    setAmount("");
    setText("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="new-transaction-container">
      <h3>Add New Transaction</h3>
      <div className="horizontal-line"></div>
      <form className="new-transaction-form" onSubmit={handleSubmit}>
        <p>Enter what type of transaction you want to add</p>
        <input
          value={text}
          maxLength={25}
          type="text"
          placeholder="Type of Transaction"
          onChange={handleTextChange}
          required
        />
        <p>Enter Amount</p>
        <input
          value={amount}
          type="number"
          placeholder="Amount"
          onChange={handleAmountChange}
          required
          min="0"
        />
        <p>Select Type</p>
        <select value={type} onChange={handleTypeChange} required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input className="button" type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};

export default NewTransaction;
