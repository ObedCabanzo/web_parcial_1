import { useState, useEffect } from "react";
import cyclingBg from "../images/cycling.avif";
import runningBg from "../images/running.avif";
import swimmingBg from "../images/swimming.avif";
import { FaRunning } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Home(props) {
  const { t, i18n } = useTranslation(); // Hook de traducción

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const [cyclingData, setCyclingData] = useState([]);
  const [runningData, setRunningData] = useState([]);
  const [swimmingData, setSwimmingData] = useState([]);

  const [selectedCard, setSelectedCard] = useState(undefined);
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [selectedSport, setSelectedSport] = useState(undefined);

  const userData = {
    nombre: "Camilo escobar",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    tiempo_cicla: 1.2,
    tiempo_corriendo: 1.2,
    tiempo_nadando: 1.2,
  };

  const [user, setUser] = useState(userData);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const newMinutes = minutes % 60;
    return `${hours}h ${newMinutes}m`;
  };

  const formatKilometers = (kilometers) => {
    return `${kilometers} km`;
  };

  const [cardFocus, setCardFocus] = useState(undefined);

  useEffect(() => {
    // Traer los datos del usuario https://github.com/ObedCabanzo/public_data/blob/main/web/parcial1/MOCK_DATA.json
    fetch(
      "https://raw.githubusercontent.com/ObedCabanzo/public_data/main/web/parcial1/MOCK_DATA.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0]);
      });
    fetch(
      "https://raw.githubusercontent.com/ObedCabanzo/public_data/main/web/parcial1/cicla.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCyclingData(data);
      });
    fetch(
      "https://raw.githubusercontent.com/ObedCabanzo/public_data/main/web/parcial1/nata.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setSwimmingData(data);
      });
    fetch(
      "https://raw.githubusercontent.com/ObedCabanzo/public_data/main/web/parcial1/run.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setRunningData(data);
      });
  }, []);

  return (
    <div className="flex flex-col w-full relative pb-32">
      <div className="fixed  top-0 right-0 flex gap-4 py-2 px-2 z-50 ">
        <button
          className="text-white bg-slate-900 px-4 py-2 font-bold "
          onClick={() => handleLanguageChange("es")}
        >
          Español
        </button>
        <button
          className="text-white bg-slate-900 px-4 py-2 font-bold "
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
      </div>
      {selectedCard && (
        <div
          className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-start"
          onClick={() => {
            setSelectedCard(undefined);
          }}
        >
          <div className="fixed top-20 h-fit flex bg-slate-50 ">
            <div
              className="flex flex-col  gap-4 p-8 bg-white w-96 items-end"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {" "}
              <div
                className="flex w-full flex-col h-[250px] border-2 border-gray-900 rounded-lg p-4 gap-4 text-white"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="text-xl font-bold">{t(selectedSport)}</h1>
                <p>{t("Recorrido alrededor de")} {selectedCard.ciudad}</p>
                <p>
                  {formatKilometers(selectedCard.distancia)}{" "}
                  {formatTime(selectedCard.duracion)}{" "}
                </p>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white w-1/2 "
                onClick={() => {
                  setSelectedCard(undefined);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-8 justify-center w-full mt-14">
        <div className="flex flex-col items-center gap-4 py-2 ">
          <h1 className="text-2xl font-bold">{t("Cycling")}</h1>
          <div className="grid grid-cols-2 gap-1">
            {cyclingData.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-8 text-white max-w-[15vw] cursor-pointer"
                    onClick={() => {
                      setSelectedCard(data);
                      setSelectedImage(cyclingBg);
                      setSelectedSport("Cycling Session");
                    }}
                    style={{
                      backgroundImage: `url(${cyclingBg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <h1 className="text-xl font-bold">{t("Cycling Session")}</h1>
                    <p>{t("Recorrido alrededor de")} {data.ciudad}</p>
                    <p>
                      {formatKilometers(data.distancia)}{" "}
                      {formatTime(data.duracion)}{" "}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-2 cursor-pointer">
          <h1 className="text-2xl font-bold">{t("Running")}</h1>
          <div className="grid grid-cols-2 gap-1">
            {runningData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-8 text-white max-w-[15vw]"
                  style={{
                    backgroundImage: `url(${runningBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    setSelectedCard(data);
                    setSelectedImage(runningBg);
                    setSelectedSport("Running Session");

                  }}
                >
                  <h1 className="text-xl font-bold">{t("Running Session")}</h1>
                  <p>{t("Recorrido alrededor de")} {data.ciudad}</p>
                  <p>
                    {formatKilometers(data.distancia)}{" "}
                    {formatTime(data.duracion)}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-2 cursor-pointer">
          <h1 className="text-2xl font-bold">{t("Swimming")}</h1>
          <div className="grid grid-cols-2 gap-1">
            {swimmingData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-8 text-white max-w-[15vw]"
                  style={{
                    backgroundImage: `url(${swimmingBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    setSelectedCard(data);
                    setSelectedImage(swimmingBg);
                    setSelectedSport("Swimming Session");

                  }}
                >
                  <h1 className="text-xl font-bold">{t("Swimming Session")}</h1>
                  <p>{t("Recorrido alrededor de")} {data.ciudad}</p>
                  <p>
                    {formatKilometers(data.distancia)}{" "}
                    {formatTime(data.duracion)}{" "}
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
            backgroundImage: `url(${user.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <h1 className="text-2xl text-white font-bold w-20 mx-8">
          {user.nombre}
        </h1>
        <div className="flex items-center gap-2">
          <FaRunning color="white" />
          <p className="text-2xl text-white font-bold">
            {formatTime(user.tiempo_corriendo)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GiCycling color="white" />
          <p className="text-2xl text-white font-bold">
            {formatTime(user.tiempo_cicla)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaSwimmer color="white" />
          <p className="text-2xl text-white font-bold">
            {formatTime(user.tiempo_nadando)}
          </p>
        </div>
      </footer>
    </div>
  );
}
