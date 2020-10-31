import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types.js'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const asyncIncrement = (dispatch) => {
    dispatch(disable_buttons())
    setTimeout(() => {
        dispatch(increment())
        dispatch(enable_buttons())
    }, 2000)
}

export const changeTheme = (value) => {
    return {
        type: CHANGE_THEME,
        value: value
    }
}

export const disable_buttons = () => {
    return {
        type: DISABLE_BUTTONS
    }
}

export const enable_buttons = () => {
    return {
        type: ENABLE_BUTTONS
    }
}

