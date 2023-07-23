import React from 'react'
import Header from './components/Header'
import NotesPage from './pages/NotesPage'
import NotePage from './pages/NotePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import style from './style'

const App = () => {
  return (
    <Router>
      <div className={style.container}>
        <div className='w-[100%] max-w-[488px] h-[88vh] bg-white mx-auto my-0 relative shadow-lg rounded-t-xl'>
          <Header />
          <Routes>
            <Route path='/' exact Component={NotesPage} />
            <Route path='/note/:id' exact Component={NotePage} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App