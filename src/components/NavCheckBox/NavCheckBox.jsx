import React from 'react'

const NavCheckBox = () => {
  return (
    <div>
        <input type="checkbox" id="abv" value="high abv"/>
        <label for="vehicle1">High ABV (Above 6.0%)</label> <br/>
        <input type="checkbox" id="classic"  value="classic range"/>
        <label for="vehicle2">Classic Range</label> <br/>
        <input type="checkbox" id="acidity" value="ph > 4 "/>
        <label for="vehicle3">Acidic (pH less than 4)</label> <br/>
    </div>
  )
}

export default NavCheckBox