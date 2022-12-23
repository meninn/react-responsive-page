import React, { useState, useEffect } from "react";

import Logoipsum from "../../images/svg/Logoipsum";
import MenuOpenIcon from "../../images/svg/MenuOpenIcon";
import MenuCloseIcon from "../../images/svg/MenuCloseIcon";

import HeaderInterface from "../../interfaces/HeaderInterface";

import "./styles.scss";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [size, setSize] = useState<HeaderInterface>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width !== undefined && size?.width > 768 && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [size.width, menuIsOpen]);

  const menuToggleHandler = () => {
    setMenuIsOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="content">
        <Logoipsum
          width="149.465"
          height="30"
          fill={menuIsOpen ? "#004875" : "#FFFFFF"}
        />

        <nav
          className={`navbar ${
            menuIsOpen && size.width !== undefined && size.width < 768
              ? "isMenu"
              : ""
          }`}
        >
          <ul>
            <li>Nulla</li>
            <li>Viverra</li>
            <li>Accumsan</li>
            <li>Ullamcorper</li>
            <li>Nascetur</li>
          </ul>
        </nav>
        <div className="toggle">
          {!menuIsOpen ? (
            <div onClick={menuToggleHandler}>
              <MenuOpenIcon width="24" height="24" />
            </div>
          ) : (
            <div onClick={menuToggleHandler}>
              <MenuCloseIcon width="19.69" height="19.69" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
