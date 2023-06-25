"use client";
import Link from "next/link";
const { useState } = require("react");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link href='/'><span>LOGO</span></Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="menu-button">
          <button onClick={toggleMenu}>menu</button>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-links" onClick={toggleMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </>
  );
}
