import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
    const isSavingAccount = useSelector(state => state.banking.isSavingAccount);
  return (
    <div>
        <h1>{isSavingAccount? "Savings Account":"Checking Account"}</h1>
    </div>
  )
}

export default AccountStatus