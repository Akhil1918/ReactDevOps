import React from 'react' // type rafce ,react arrow func export component, shortcut
// JSX is a syntax extension for JS that lets you write HTML, like markup inside a JS file.
// 2 types of components : functional and class
// React is used to mainly develop single page applications
import './App.css'
import Register from './components/Register'
import Home from './components/Home'

const App = () => {
  return (
    <div>

      <>
      <Home />
      <div className='row'>
        <div className='col col-lg-3'>
        <img src="/images/images1.webp" height={500} width={500} className='img1 mt-5 ms-5' alt=""/>
        </div>
        <div className='col'>
        <Register />
        </div>
      </div>
      
      </>
        
    </div>
  )
}

export default App