import * as actions from './data.actionCreator'
import {ActionType} from 'typesafe-actions'

type Actions = ActionType<typeof actions>

export interface People{
    name: string
    age: number
    dob: number
}

export interface InitialState{
    data: Array<People>
}

const initialState: InitialState = {
    data: []
}

const dataReducer = (state = initialState, action: Actions) => {
    if(action.type === 'STORE DATA'){
        return ({
            ...state,
            data: action.payload
        })
    }
else{
    return state
}
}

export default dataReducer