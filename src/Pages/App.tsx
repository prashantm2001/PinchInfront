import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Answers from './answers'
import './App.css'
import Greet from './greet'
import Questions from './questions'
import Result from './result'

function App() {
  return (
    <div className='h-screen w-full bg-zinc-200'>
        <Routes>
          <Route path='/' element={<Greet />} />
          <Route path='/ques' element={<Questions />} />
          <Route path='/res' element={<Result />} />
          <Route path='/res/:score' element={<Result />} />
          <Route path='/ans' element={<Answers />} />
        </Routes>
    </div>
  )
}

export default App
