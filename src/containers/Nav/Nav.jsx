import React from 'react'
import NavCheckBox from '../../components/NavCheckBox/NavCheckBox'
import NavSearch from '../../components/NavSearch/NavSearch'
import "../Nav/Nav.scss"

const Nav = (props) => {

  const {handleInput, handleChangeABV, handleChangeClassic, handleChangeAcid} = props
  return (
    <div className = "nav">
      <NavSearch handleInput={handleInput}/>
      <NavCheckBox handleChangeABV={handleChangeABV} handleChangeClassic={handleChangeClassic} handleChangeAcid={handleChangeAcid}/>
      <h1>Nav</h1>
      </div>
  )
}

export default Nav