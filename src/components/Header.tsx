import React, { useContext, useEffect, useState } from "react";
import { Menu } from "react-feather";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let [burger, setBurger] = useState(true); //reset to false
  let [modal, setModal] = useState(true);
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
            ? "absolute h-screen w-screen z-50 bg-polar-3 text-center "
            : "hidden") + " text-snow-2 divide-y"
          //todo make animation go down lmao
        }
      >
        <div
          className="text-xl p-4"
          onClick={() => {
            navigate("/");
            setBurger(!burger);
          }}
        >
          home
        </div>
        <div
          className="text-xl p-4"
          onClick={() => {
            navigate("/faq");
            setBurger(!burger);
          }}
        >
          contact
        </div>
        <div className="flex flex-row p-4 items-center justify-center">
          {modal ? (
            <div className="divide-y">
              <div> Projects </div>
              <div
                className="text-xl p-4"
                onClick={() => {
                  navigate("/solaris");
                  setBurger(!burger);
                }}
              >
                Solaris
              </div>

              <div
                className="text-xl p-4"
                onClick={() => {
                  navigate("/floppanotes");
                  setBurger(!burger);
                }}
              >
                Floppa Notes
              </div>

              <div
                className="text-xl p-4"
                onClick={() => {
                  navigate("/floppafiles");
                  setBurger(!burger);
                }}
              >
                Floppa Files
              </div>
            </div>
          ) : (
            <div className="text-xl">Projects</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
