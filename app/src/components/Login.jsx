import { useState } from "react";
import { useTranslation } from "react-i18next";
import background from "../images/bg.avif";
import { FaEye } from "react-icons/fa";

export default function Login() {
  const { t ,  i18n } = useTranslation();  // Hook de traducción
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  }


  const handleLoginClick = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert(t("The email format is not valid")); // Traducción
      return;
    } else if (password.length !== 8) {
      alert(t("The password must have 8 characters")); // Traducción
      return;
    } else {
      window.location.href = "/home";
    }
  };

  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-4 p-8 bg-white w-96 ">
        <h1 className="text-lg font-bold">{t("Login")}</h1>
        <div className="flex flex-col gap-1">
          <h2>{t("Email")}</h2>
          <input
            className="border-2 border-gray-500 p-2 outline-none"
            onChange={handleEmailChange}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2>{t("Password")}</h2>
          <div className="flex justify-between border-2 border-gray-500 p-2 items-center ">
            <input
              className="outline-none"
              onChange={handlePasswordChange}
              type={showPassword ? "text" : "password"}
            />
            <FaEye
              className="text-gray-500 cursor-pointer mx-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button
          className="px-8 py-2 bg-blue-400 w-2/3 text-white "
          onClick={handleLoginClick}
        >
          {t("Log in")}
        </button>

        <div className="absolute top-0 right-0 flex gap-4 py-2 px-2 ">
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

      </div>
    </div>
  );
}
