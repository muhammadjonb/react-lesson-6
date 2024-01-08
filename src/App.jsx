import React from 'react'
import Contacts from './components/Contacts'
import Add from './components/Add';

import './Global.scss'
import './assets/scss/Style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="container w-50 pt-3 content">
        <Contacts />
        <Add />
      </div>
    </>
  )
}

export default App