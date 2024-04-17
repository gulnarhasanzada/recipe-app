import './App.css'
import Header from './components/header/Header'
import AppRouter from './router/AppRouter'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <AppRouter/>
      <Outlet />
    </div>
  )
}

export default App
