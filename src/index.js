import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {rootReducer} from "./redux/rootReducer.js"
import {asyncIncrement, changeTheme, decrement, increment} from './redux/actions.js'
import './styles.css'

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
const counterSpan = document.getElementById('counter')

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement)
})

themeBtn.addEventListener('click', () => {
    const newValue = store.getState().theme.value === 'dark' ? 'light' : 'dark'
    store.dispatch(changeTheme(newValue))
})

store.subscribe(() => {
    const state = store.getState()
    counterSpan.innerText = state.counter
    document.body.className = state.theme.value;
    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
        btn.disabled = state.theme.disabled
    })
})

store.dispatch({type: 'INIT_APP'})


