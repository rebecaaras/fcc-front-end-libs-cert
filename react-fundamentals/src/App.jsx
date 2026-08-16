import './App.css'
import { Card } from './components/profile-card'
import { Navbar } from './components/navbar'

function App() {
  const profiles = [
    {name:"Mark", title:"Monkey Mesmerizer", bio:"I like to make monkeys feel home, so they can perform in a comfortable way"},
    {name:"Claudia", title:"Snake sitter", bio:"Snakes are amazing, lovely and trustworthy animals"},
    {name:"Junior", title:"Just a junior at the zoo", bio:"Tbh I don't know what is going on in this place"}
  ]
  return (
    <div className="flex-container">
      {profiles.map( (profile) => (
        <Card 
          name={profile.name}
          title={profile.title} 
          bio={profile.bio}
        />
      ))}
    </div>
  )
}

export default App
