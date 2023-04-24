import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import ItemDetailes from '../components/ItemDetailes'
import AddItem from '../components/AddItem'
import EditItem from '../components/EditItem'

const AppRouts = () => {
  return (
    <div>
        <Router>
          <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/item/:id' element={<ItemDetailes/>}/>
                <Route path='/edit/:id' element={<EditItem/>}/>
                <Route path='/add' element={<AddItem/>}/>
                <Route path='/*' element={<h2>Not found , 404</h2>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default AppRouts