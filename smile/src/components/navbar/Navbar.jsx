import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: " ",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <img src="./img/smile.png" alt="" />
        </div>
        <div className="links">
          <span>Smile-Router</span>
          <span>Company</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="./img/Smile.webp"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                   
                  </>
                )}
                <Link className="link" to="/orders">
                  Contacct-Us
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Services
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
        </div>
        </div>
  );
}

export default Navbar;
