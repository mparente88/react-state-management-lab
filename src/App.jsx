import { useState } from "react"
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
      id: 1,
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
      id: 2,
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
      id: 3,
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
      id: 4,
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
      id: 5,
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
      id: 6,
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
      id: 7,
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
      id: 8,
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
      id: 9,
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
      id: 10,
    },
  ])

  const handleAddFighter = (newFighter) => {
    if (money >= newFighter.price) {
      setTeam([...team, newFighter])
      setTotalStrength(totalStrength + newFighter.strength)
      setTotalAgility(totalAgility + newFighter.agility)
      setMoney(money - newFighter.price)
    } else {
      console.log("Not enough money.")
    }
  }

  const handleRemoveFighter = (oldFighter) => {
    const fighterExists = team.some((fighter) => fighter.id === oldFighter.id)

    if (fighterExists) {
      const newTeam = team.filter((fighter) => fighter.id !== oldFighter.id)

      setTotalStrength(totalStrength - oldFighter.strength)
      setTotalAgility(totalAgility - oldFighter.agility)
      setMoney(money + oldFighter.price)
      setTeam(newTeam)
    } else {
      console.log("You do not have that fighter.")
    }
  }

  return (
    <>
      <div className="team-container">
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          team.map((fighter) => (
            <ul key={fighter.name}>
              <li>{fighter.name}</li>
              <li>
                <img src={fighter.img}></img>
              </li>
              <li>{fighter.price}</li>
              <li>{fighter.strength}</li>
              <li>{fighter.agility}</li>
            </ul>
          ))
        )}
      </div>
      <span>Total Strength: {totalStrength}</span>
      <span>Total Agility: {totalAgility}</span>
      <div className="fighters-container">
        {zombieFighters.map((fighter) => (
          <ul key={fighter.name}>
            <li>{fighter.name}</li>
            <li>{fighter.price}</li>
            <li>{fighter.strength}</li>
            <li>{fighter.agility}</li>
            <li>
              <img src={fighter.img} />
            </li>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </ul>
        ))}
      </div>
      <div className="money-container">
        <span>Money Remaining: {money}</span>
      </div>
    </>
  )
}

export default App
