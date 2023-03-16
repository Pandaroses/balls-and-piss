import React, { useContext, useEffect, useState } from "react";
import { Menu, ChevronRight, ChevronDown } from "react-feather";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let [burger, setBurger] = useState(true); //reset to false
  let [modal, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:h-screen w-screen md:w-80 bg-polar-2">
      <div className="md:hidden flex flex-row items-center p-4">
        <text
          className="text-3xl flex-1 text-snow-0 cursor-pointer"
          onClick={() => alert(":3")}
        >
          :3
        </text>
        <Menu
          className="focus:scale-125 transition-transform cursor-pointer text-snow-1"
          onClick={() => setBurger(!burger)}
          size={34}
        />
      </div>
      <div
        className={
          (burger
            ? "absolute h-screen w-screen z-50 bg-polar-1 text-center "
            : "hidden") + " text-snow-0 "
          //todo make animation go down lmao
        }
      >
        <Nav name="Home" path="" setBurger={setBurger} />

        <div className="flex flex-row justify-center w-screen  ">
          {modal ? (
            <div className="flex flex-col items-center">
              <div
                className="text-xl flex items-center p-4"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <ChevronDown size={24} />
                Projects
              </div>
              <div className="bg-polar-2  text-snow-0">
                <Nav name="Solaris" path="solaris" setBurger={setBurger} />
                <Nav
                  name="Floppa Notes"
                  path="floppanotes"
                  setBurger={setBurger}
                />
                <Nav name="Floppa 40" path="floppa40" setBurger={setBurger} />
              </div>
            </div>
          ) : (
            <div
              className="text-xl flex items-center p-4"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <ChevronRight size={24} />
              Projects
            </div>
          )}
        </div>

        <Nav name="FAQ" path="faq" setBurger={setBurger} />
        <Nav name="Contact" path="contact" setBurger={setBurger} />
      </div>
    </div>
  );
};

const Nav = ({ name, path, setBurger }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-xl p-4 w-screen"
      onClick={() => {
        navigate("/" + path);
        setBurger(false);
      }}
    >
      {name}
    </div>
  );
};

export default Header;
