import './App.css'
import { Route, Switch } from 'react-router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

import Detail from './pages/detail'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Cake/:id">
          <Detail />
        </Route>
      </Switch>

      <Footer />
    </>
  )
}

export default App
