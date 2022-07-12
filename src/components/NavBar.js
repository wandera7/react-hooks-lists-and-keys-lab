import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    
    <nav>
    {links.map((link,index)=>{
      return <a key={index} href={`#${link}`}>{link}</a>
    })}
    {/* display an <a> tag for each link here */}
    </nav>
    
  )
}

export default NavBar;
