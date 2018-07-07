import * as React from "react"

import ButtonCounter from "./components/ButtonCounter/ButtonCounter"
import Menu from "./components/Menu/Menu"

import "./App.css"

import logo from "./logo.svg"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React TypeScript patterns</h1>
        </header>
        <h5>Button Stateless Component and ButtonCounter Container/Stateful Component</h5>
        <ButtonCounter />
        <h5>Render Callbacks/Render Props pattern</h5>
        <Menu />
      </div>
    )
  }
}

export default App
