
const initialState = {
    balance: 0,
    isSavingAccount: false
};

export const bankingReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.amount};
            break;
        case "WITHDRAW":
            return { ...state, balance: state.balance - action.amount};
            break;
        case "COLLECT_INTEREST":
            return { ...state, balance: state.balance*1.03};
            break;
        case "DELETE_ACCOUNT":
            return { ...state, balance: 0};
            break;
        case "TOGGLE_ACCOUNT":
            return { ...state, isSavingAccount: !state.isSavingAccount};
            break;  
        default: 
            return state;
    }
};
// actions 

// deposit
const deposit = {
    type: "DEPOSIT",
    amount: 20,
};

// withdraw

const withdraw = {
    type: "WITHDRAW",
    amount: 3,
};

// const collect interest 
const collectInterest = {
    type: "COLLECT_INTEREST",

};

// delete account
const deleteAccount = {
    type: "DELETE_ACCOUNT",
    
};