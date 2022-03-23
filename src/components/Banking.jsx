import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw, collectInterest, deleteAccount, ToggleAccount} from "../Actions/bankingActions"
const Banking = () => {

    const [amount, setAmount] = useState("");
    const Dispatch = useDispatch();

    const handleDeposit = () => {
         Dispatch(deposit(amount));
    };

    const handleWithdraw = () => {
         Dispatch(withdraw(amount));
    };

    const handleCollectInterest = () => {
         Dispatch(collectInterest());
    };

    const handleDelete = () => {
         Dispatch(deleteAccount());
    };

    const handleAccountChange = () => {
         Dispatch(ToggleAccount());
    };

  return (
    <div className='form-group'>
        <input 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            type="text" 
            className="form-control" />
        <button onClick={handleDeposit} className="btn btn-success">Deposite</button>
        <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
        <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
        <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
        <button onClick={handleAccountChange} className="btn btn-secondary">Change Account type</button>
    </div>
  )
}

export default Banking