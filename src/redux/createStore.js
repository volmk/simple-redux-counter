import {INIT_APP} from './types.js'

const createStore = (rootReducer, initialState) => {
    let state = rootReducer(initialState, INIT_APP)
    const subscribers = []

    return {
        dispatch: (action) => {
            state = rootReducer(state, action)
            subscribers.forEach(s => s())
        },
        subscribe: (callback) => {
            subscribers.push(callback) 
        }, 
        getState: () => {
            return state
        }
    }
}

export default createStore