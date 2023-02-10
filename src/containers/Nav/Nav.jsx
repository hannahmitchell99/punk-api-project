import React from 'react'
import NavCheckBox from '../../components/NavCheckBox/NavCheckBox'
import NavSearch from '../../components/NavSearch/NavSearch'
import "../Nav/Nav.scss"

const Nav = (props) => {

  const {handleInput, handleSelect} = props
  return (
    <div className = "nav">
      <NavSearch handleInput={handleInput}/>
      <NavCheckBox/>
      <h1>Nav</h1>
      </div>
  )
}

export default Nav