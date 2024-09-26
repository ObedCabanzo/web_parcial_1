import { useState } from "react";
import background from "../images/bg.avif";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen" style={{
        backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }}>
      <div className="flex flex-col gap-4 p-8 bg-white w-96 ">
        <h1 className="text-lg font-bold">Login</h1>
        <div className="flex flex-col gap-1">
          <h2>Username</h2>
          <input
            className="border-2 border-gray-500 p-2"
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Password</h2>
          <input
            className="border-2 border-gray-500 p-2"
            onChange={handlePasswordChange}
            type="password"
          ></input>
        </div>
        <button className="px-8 py-2 bg-blue-400 w-2/3">Log in</button>
      </div>
    </div>
  );
}
