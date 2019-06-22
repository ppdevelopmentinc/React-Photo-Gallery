import React from 'react'
import Nav from './Nav'
import Search from './Search'


const Header = (props) => {
  return (
    <header>
      <h3>Search the universe below...</h3>
      {/* <Search onSearch={props.onSearch} title={props.getTitle} /> */}
      <Nav />
    </header>
  )
}

export default Header
