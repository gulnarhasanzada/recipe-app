import React from 'react'
import ReactDOM from 'react-dom/client'
import RecipeContextProvider from './context/RecipeContextProvider'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import UserContextProvider from './context/UserContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider><RecipeContextProvider><BrowserRouter><App /></BrowserRouter></RecipeContextProvider></UserContextProvider>,
)
