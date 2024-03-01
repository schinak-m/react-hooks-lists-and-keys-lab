import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navItems = links.map(link => {
    const formattedLink = `#${link}`
    return <a key={link} href={formattedLink}>{link}</a>
  })

  return <nav>{navItems}</nav>;
}

export default NavBar;
