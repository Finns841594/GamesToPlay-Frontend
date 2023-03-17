import { useEffect, useState } from "react"
import { GameCard } from "../types"
import { GameCards } from "./GameCards"
import { GameOfTheYearCard } from "./GameOfTheYearCard"

interface IYearCard {
  year: string
}

export const YearCard = ({year}: IYearCard) => {
  const emptyGameInfoObj = {
    'name': '',
    'imgUrl': '',
    'tgaYear': "2022",
    'tgaWinner': false,
    'played': false,
    'metaData': {}
  }
  const [gameData, setgameData] = useState(emptyGameInfoObj)
  const [gamesData, setgamesData] = useState([emptyGameInfoObj])
  const [uppdateData, setUppdateData] = useState(0)
  
  const fetchGames = async () => {
    let result = await fetch(`http://localhost:3000/api/users/user001/${year}`).then(response => response.json())
    return result
  }

  const update = () => {
    setUppdateData(uppdateData + 1)
    console.log('updating data')
  }

  useEffect(() => {
    fetchGames().then(result => {
      setgameData(result.filter((item:any) => item.tgaWinner === true)[0]),
      setgamesData(result.filter((item:any) => item.tgaWinner != true))
    })
  }, [uppdateData])

  return (
    <div className="yearcard" >
      <h2 className="yearcard_title" >TGA {year}</h2>
      <GameOfTheYearCard gameInfo={gameData} callback={update} />
      <GameCards gameInfos={gamesData} callback={update} />
    </div>
  )
}