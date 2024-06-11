import React from 'react'
import suitmedia from "../../assets/suitmedia-internship-program-suitschool-2019-480x480.png"

export const Logo = () => {
  return (
    <div>
      <a href='/'>
        <img src={suitmedia} alt='logo' className="h-16"/>
      </a>
    </div>
  )
}
