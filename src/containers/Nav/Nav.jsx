import React from 'react'
import NavCheckBox from '../../components/NavCheckBox/NavCheckBox'
import NavSearch from '../../components/NavSearch/NavSearch'
import "../Nav/Nav.scss"

const Nav = (props) => {

  const {handleInput, handleABV, handleClassic, handleAcid ,abvCheck, classicCheck, acidCheck} = props
  return (
    <div className = "nav">
      <NavSearch handleInput={handleInput}/>
      <NavCheckBox handleABV={handleABV} handleClassic={handleClassic} handleAcid={handleAcid}
      abvCheck={abvCheck} classicCheck={classicCheck} acidCheck={acidCheck}/>
    
      </div>
  )
}

export default Nav