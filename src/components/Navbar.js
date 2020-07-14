import React from "react"
import styled from 'styled-components';

//example styled-components CSS function--
const H1 = styled.h1 `
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2em;
`

const Navbar = () => {
    return(
        <nav>
            <H1 class="center">React Color Card App</H1> 
            {/* swap out the const H1 for the html h1  */}
        </nav>
    )
}



export default Navbar;