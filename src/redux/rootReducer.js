import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types.js'
import {combineReducers} from "redux";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1
        }
        case DECREMENT: {
            return state - 1
        }
        default: {
            return state
        }
    }
}

const initialValue = {
    value: 'dark',
    disabled: false
}

const themeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, value: action.value}
        }
        case ENABLE_BUTTONS: {
            return {...state, disabled: false}
        }
        case DISABLE_BUTTONS: {
            return {...state, disabled: true}
        }
        default: {
            return state
        }
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})