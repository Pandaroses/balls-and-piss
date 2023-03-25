import React, { useState, useEffect } from "react";
const Meow = () => {
  let [lvl, setLvl] = useState(1);
  let [exp, setExp] = useState(0);
  let [money, setMoney] = useState(0.0);
  let [short, setShort] = useState("0");
  let [pet, setPet] = useState(0);
  let [cost, setCost] = useState(2);
  let [len, setLen] = useState(0);
  let [url, setUrl] = useState("https://cataas.com/c/orange?type=sq");
  let words = [
    "i know what you did",
    "mlem",
    "i lost the game",
    "bleh",
    "who am i",
    "Hiiii",
    "Meow",
    "Portato cherp",
    "blerp",
    "purr",
    "i <3 pets",
  ];
  let meow = new Audio("https://files.flopper.me/m14gaWOJ4x.meow.wav");
  meow.volume = 0.1;
  useEffect(() => {
    if (exp >= Math.round(Math.pow(lvl + 1, 3 / 2))) {
      setLvl(lvl + 1);
      setUrl(
        "https://cataas.com/c/s/" +
          words[Math.floor(Math.random() * words.length)] +
          "?type=sq&?" +
          new Date().getTime()
      );
      meow.play();
    }
  }, [exp]);

  const fart = async () => {
    setTimeout(() => {
      
     let mon = money;
    setMoney(mon+pet*0.2);
    },1000)
     }
  fart();
  useEffect(() => {
    setCost(round(Math.pow(cost, 1.08), 2));
    console.log(cost);
  }, [pet]);
    const round = (input, digits): any => {
    var rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
  };
  useEffect(() => {
    let fin = [
      "",
      "K",
      "M",
      "B",
      "T",
      "Q",
      "QT",
      "H",
      "S",
      "O",
      "N",
      "D",
      "UD",
      "DD",
      "TD",
      "QT",
      "brok",
    ];
    let length = String(Math.round(money)).length;
    let num: any = 0;
    if ((length - 1) % 3 === 0) {
      num = round(money / Math.pow(10, length), 2) * 10;
      setLen(length);
    } else {
      num = round(money / Math.pow(10, len), 2) * 10;
    }

    setShort(num.toFixed(2) + fin[Math.floor((length - 1) / 3)]);
  }, [money]);
  return (
    <div className="flex flex-col w-64">
      <div className="text-snow-0 text-3xl px-2">Cat Petter:</div>
      <img
        id="cat"
        className="select-none rounded-sm cursor-[url(./assets/unpressed.cur),_default] w-64 active:cursor-[url(./assets/pressed.cur),_pointer] "
        src={url}
        onClick={() => {
          setExp(exp + 1);
          setMoney(money + 0.1);
        }}
      />
      <div className="flex flex-col w-64 text-snow-0 text-xl">
        <div className="flex flex-row justify-evenly">
          <div>Level {lvl}</div>
          <div>{pet} cats</div>
        </div>

        <div className="flex flex-row justify-evenly">{short} petcoins </div>
        <div
          className="w-30 h-12 border-polar-0 rounded-md border-2 text-center active:scale-105 p-2 select-none cursor-pointer"
          onClick={() => {
            if (money > cost) {
              setMoney(money - cost);
              setPet(pet + 1);
            }
          }}
        >
          buy cat for {cost}
        </div>
      </div>
    </div>
  );
};

export default Meow;
