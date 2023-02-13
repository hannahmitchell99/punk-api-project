import React from 'react'

const NavCheckBox = (props) => {

    const {handleABV, handleClassic, handleAcid, abvCheck, classicCheck, acidCheck} = props
  return (
    <div>
        
        <input onChange={handleABV} checked={abvCheck} type="checkbox" id="abv" />
        <label for="abv">High ABV (Above 6.0%)</label> <br/>
        <input onChange={handleClassic} checked={classicCheck} type="checkbox" id="classic"/>
        <label for="classic">Classic Range</label> <br/>
        <input onChange={handleAcid} checked={acidCheck}type="checkbox" id="acidity"/>
        <label for="acidity">Acidic (pH less than 4)</label> <br/>
    </div>
  )
}

export default NavCheckBox