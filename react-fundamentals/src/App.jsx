import './App.css'
import Capivara, {Jumentinho} from './components/animals'
import MyCat from './components/cat'
import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <Navbar/>
      <MyCat/>
      <Capivara/>
      <Jumentinho/>
      <Jumentinho/>
    </>
  )
}

export default App
