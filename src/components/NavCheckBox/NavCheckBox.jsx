import React from 'react'

const NavCheckBox = (props) => {

    const {handleChangeABV, handleChangeClassic, handleChangeAcid} = props
  return (
    <div>
        <input onChange={handleChangeABV} type="checkbox" id="abv" value="6"/>
        <label for="abv">High ABV (Above 6.0%)</label> <br/>
        <input onChange={handleChangeClassic} type="checkbox" id="classic"  value="2010"/>
        <label for="classic">Classic Range</label> <br/>
        <input onChange={handleChangeAcid} type="checkbox" id="acidity" value="4"/>
        <label for="acidity">Acidic (pH less than 4)</label> <br/>
    </div>
  )
}

export default NavCheckBox