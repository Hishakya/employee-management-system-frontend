import { signinActionType } from './signin.type'

const INITIAL_STATE = {
    userList: ''
}

export const signinReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case signinActionType.SHOW_USER:
            return{
                ...state,
                userList: action.payload
            }
        default:
            return state
    }
}
