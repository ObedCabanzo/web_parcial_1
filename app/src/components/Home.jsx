import { useState } from "react";
import cyclingBg from "../images/cycling.avif";
import runningBg from "../images/running.avif";
import swimmingBg from "../images/swimming.avif";
import userBg from "../images/user_bg.png";
import { FaRunning } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";

export default function Home(props) {
  const [bestCyclingTime, setBestCyclingTime] = useState(1.2);
  const [bestRunningTime, setBestRunningTime] = useState(1.2);
  const [bestSwimmingTime, setBestSwimmingTime] = useState(1.2);

  const userData = {
    name: "Camilo escobar",
  };
  const cyclingData = [
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 40,
      time: 1.5,
    },
  ];

  const runningData = [
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
  ];

  const swimmingData = [
    {
      place: "Bahia de Cartegena ",
      num: 5,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },

    {
      place: "Bahia de Cartegena ",
      num: 10,
      time: 1.5,
    },
  ];

  return (
    <div className="flex flex-col w-full relative">
      <div className="flex gap-8 justify-center w-full">
        <div className="flex flex-col items-center gap-4 py-2 ">
          <h1 className="text-2xl font-bold">Cycling</h1>
          <div className="grid grid-cols-2 gap-1">
            {cyclingData.map((data, index) => {
              let isDisplayed = false;
              return (
                <>
                  <div
                    className="flex flex-col gap-2 p-8 text-white max-w-[15vw] cursor-pointer"
                    style={{
                      backgroundImage: `url(${cyclingBg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    onClick={!isDisplayed}
                  >
                    <h1 className="text-xl font-bold">Cycling Session</h1>
                    <p>Recorrido alrededor de {data.place}</p>
                    <p>
                      {data.num}k {data.time}h{" "}
                    </p>
                  </div>
                  
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-2 cursor-pointer">
          <h1 className="text-2xl font-bold">Running</h1>
          <div className="grid grid-cols-2 gap-1">
            {runningData.map((data, index) => {
              return (
                <div
                  className="flex flex-col gap-2 p-8 text-white max-w-[15vw]"
                  style={{
                    backgroundImage: `url(${runningBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h1 className="text-xl font-bold">Cycling Session</h1>
                  <p>Recorrido alrededor de {data.place}</p>
                  <p>
                    {data.num}k {data.time}h{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-2 cursor-pointer">
          <h1 className="text-2xl font-bold">Swimming</h1>
          <div className="grid grid-cols-2 gap-1">
            {swimmingData.map((data, index) => {
              return (
                <div
                  className="flex flex-col gap-2 p-8 text-white max-w-[15vw]"
                  style={{
                    backgroundImage: `url(${swimmingBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <h1 className="text-xl font-bold">Cycling Session</h1>
                  <p>Recorrido alrededor de {data.place}</p>
                  <p>
                    {data.num}k {data.time}h{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="fixed w-full h-24 bg-slate-400 bottom-0 flex justify-center items-center gap-8">
        <div
          className="bg-black rounded-full w-16 h-16"
          style={{
            backgroundImage: `url(${userBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <h1 className="text-2xl text-white font-bold w-20">{userData.name}</h1>
        <div className="flex items-center gap-2">
          <FaRunning color="white" />
          <p className="text-2xl text-white font-bold">{bestRunningTime}</p>
        </div>
        <div className="flex items-center gap-2">
          <GiCycling color="white" />
          <p className="text-2xl text-white font-bold">{bestCyclingTime}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaSwimmer color="white" />
          <p className="text-2xl text-white font-bold">{bestSwimmingTime}</p>
        </div>
      </footer>
    </div>
  );
}
