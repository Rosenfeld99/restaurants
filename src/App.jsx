import './App.css'
import AppRouts from './router/AppRouts'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import RestaSlice from '../src/fetrues/RestaSlice'

const store = configureStore({
  reducer:{
    RestaSlice
  }
})

function App() {

  return (
    <Provider store={store}>
      <AppRouts/>
    </Provider>
  )
}

export default App
