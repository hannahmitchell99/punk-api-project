import React from 'react'
import "../NavSearch/NavSearch.scss"

const NavSearch = (props) => {
    const {handleInput} = props;
  return (
    <>
        <label for ="nav__search">Search:</label>
        <input onChange={handleInput} type="text" className="nav__search"></input>
    </>
  )
}

export default NavSearch