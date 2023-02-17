import React from 'react'
import NavCheckBox from '../../components/NavCheckBox/NavCheckBox'
import NavSearch from '../../components/NavSearch/NavSearch'
import "../Nav/Nav.scss"
import RandomBeer from '../RandomBeer/RandomBeer'

const Nav = (props) => {

  const {handleInput, handleABV, handleClassic, handleAcid ,abvCheck, classicCheck, acidCheck, beer, handleSpotlight, randomDisplay} = props
  return (
    <div className = "nav">
      <NavSearch handleInput={handleInput}/>
      <NavCheckBox handleABV={handleABV} handleClassic={handleClassic} handleAcid={handleAcid}
      abvCheck={abvCheck} classicCheck={classicCheck} acidCheck={acidCheck}/>
      <button className = "nav__button" onClick={handleSpotlight}>Spotlight Beer</button>
      { randomDisplay && <RandomBeer beer={beer}/>}
      
    
      </div>
  )
}

export default Nav