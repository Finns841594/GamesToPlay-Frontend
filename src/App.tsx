import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/header'
import { YearCard } from './components/YearCard'

function App() {
  return (
    <div className="App">
      <Header />
      <YearCard year={'2022'} />
      <YearCard year={'2021'} />
      <YearCard year={'2020'} />
      <YearCard year={'2019'} />
      <YearCard year={'2018'} />
      <YearCard year={'2017'} />
    </div>
  )
}

export default App
