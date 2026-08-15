import './App.css'
import { Card } from './components/profile-card'
import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Card name = "Carlos" title="software engineer" bio="principal software engineer at Paypal"/>
      <Card name = "Carlos" title="software engineer" bio="principal software engineer at Paypal"/>
    </>
  )
}

export default App
