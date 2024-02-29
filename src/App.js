import React from "react"
import { hot } from "react-hot-loader"
import Home from "./pages/Home"
import './styles/global.css'


const App = () => (
    <div className="container">
        <Home />
    </div>
)

export default hot(module)(App)
