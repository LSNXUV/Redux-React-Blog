import React from 'react'
import "./Home.css"

import { NavLink } from 'react-router-dom'
// import { hover } from '@testing-library/user-event/dist/hover'


export default function Home() {


  const nav = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]


  return (
    <div>
        <h1>Home</h1>
        
        <ul>
          {nav.map(item => (
            
              <NavLink to={item.link} >{item.name}</NavLink>
              
           
          ))}
        </ul>
    </div>
  )
}
