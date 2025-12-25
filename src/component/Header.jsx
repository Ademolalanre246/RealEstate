import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth  h-container ">
        <img src="./logo.png" alt="" width={100} />
        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false);
        }}
        >
          <div className="flexCenter h-menu"
            styles={getMenuStyles(menuOpened)}
          >

            <a href="">
              Residency
            </a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get started</a>
            <a href=""> <button className='button'>Contact </button> </a>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  )
}

export default Header
