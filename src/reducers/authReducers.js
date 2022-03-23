
const initState = {
    isLoggedIn: false,
}

export const authReducers = (state = initState, action) => {
     switch(action.type){
         case "TOGGLE_AUTH":
            return {...state, isLoggedIn: !state.isLoggedIn};
            break;
         default:
             return state;
     }
}