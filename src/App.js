import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards'
import Detail from './components/Detail'
import Hed from './components/Hed'
import Home from './components/Home'
import Jumbo from './components/Jumbo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Hed />
        <Switch>
          <Route path="/jumbo">
            <Jumbo />
          </Route>
          <Route path="/card">
            <Cards />
          </Route>
          <Route path="/detail">
            <Detail />
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
