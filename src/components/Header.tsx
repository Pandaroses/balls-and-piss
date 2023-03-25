import React, { useContext, useEffect, useState } from "react";
import { Menu, ChevronRight, ChevronDown } from "react-feather";
import { useNavigate } from "react-router-dom";
import Meow from "./Meow";
const Header = () => {
  let [burger, setBurger] = useState(false); //reset to false
  let [modal, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:h-screen w-screen md:w-64 bg-polar-2">
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

        <Nav name="Cat" path="cat" setBurger={setBurger} />
        <Nav name="Contact" path="contact" setBurger={setBurger} />
      </div>
      <div className="max-md:hidden divide-y divide-snow-2 w-64">
        <div className="w-56 h-40  " onClick={() => navigate("/")}>
          <img
            src="https://cdn.discordapp.com/attachments/563966858462625822/1086306172526661684/image.png"
            className="w-16 h-40"
          />
        </div>
        <div className="text-snow-0 animate-colour duration-255">
          <h1 className="text-snow-0 text-3xl px-2 pt-4">Projects:</h1>

          <Nav name="Floppa Files" path="floppafiles" setBurger={console.log} />
          <Nav name="Floppa Notes" path="floppanotes" setBurger={console.log} />
          <Nav name="Floppa40" path="floppa40" setBurger={console.log} />
          <Nav name="Solaris" path="solaris" setBurger={console.log} />
        </div>
        <Meow />
        <div className="self-end"> contact me at big boobs</div>
      </div>
    </div>
  );
};

const Nav = ({ name, path, setBurger }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-xl md:px-4 md:py-2 p-4  max-md:w-screen hover:text-frost-3 cursor-pointer "
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
