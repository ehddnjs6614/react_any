import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/card">
            <Cards />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
