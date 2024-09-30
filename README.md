# Ejecución del Parcial y Reporte de Decisiones

## Paso a Paso para la Ejecución

1. Instalación de Dependencias

  Se debe ejecutar el comando "npm install" ubicandose en la carpeta principal del proyecto denominada "./app", se instalaron las siguientes dependencias:

  - Tailwind CSS: Para estilizado rápido.
  - react-router-dom: Para la gestión del enrutamiento en la aplicación.
  - i18next: Para la implementación de la internacionalización, permitiendo soportar múltiples idiomas (ingles y español).
2. Ejecución del proyecto
  
  Posterior a ello se debe realizar la ejecución del proyecto con el comando "npm start"

## Desarrollo de Componentes

Se desarrollaron dos componentes principales: Login y Home.

### Componente Login
  Este componente gestiona el inicio de sesión del usuario, utilizando useState para manejar el estado de los campos de entrada. Aquí se implementó la validación de email y contraseña. Además, se utilizó el hook de traducción useTranslation para soportar la internacionalización.

  ```javascript annotate
import { useState } from "react";
import { useTranslation } from "react-i18next";
import background from "../images/bg.avif";
import { FaEye } from "react-icons/fa";

export default function Login() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Funciones para manejar cambios en los campos de entrada
  // Función para manejar el inicio de sesión
}

  ```

### Componente Home
  Este componente es la página principal donde se muestran las actividades (ciclismo, correr y nadar). También utiliza useTranslation y useState para manejar el estado de los datos de las actividades. Los datos se obtienen de fuentes externas utilizando fetch.

  ```javascript annotate
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

useEffect(() => {
    // Fetch de datos externos
  }, []);

  // Renderizado del componente
}


  ```
## Estilizado con Tailwind CSS

  Se utilizó Tailwind CSS para estilizar los componentes, permitiendo un diseño eficaz con clases utilitarias. Esto facilitó la creación de diseños complejos sin necesidad de escribir CSS personalizado.

## Enrutamiento con react-router-dom
  
  Se configuró el enrutamiento de la aplicación utilizando react-router-dom, permitiendo la navegación entre el componente Login y Home. Esto mejora la experiencia del usuario al proporcionar una interfaz intuitiva.

  ```javascript annotate
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


  ```

## Internacionalización con i18next
  Se implementó la traducción de textos utilizando el hook useTranslation, lo que permite cambiar el idioma de la aplicación dinámicamente. Se definieron los recursos de traducción en el archivo i18n.js.

  ```javascript annotate
// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      "Iniciar sesión": "Login",
      "Correo electrónico": "Email",
      "Contraseña": "Password",
      "Iniciar sesión": "Log in",
      "El formato del correo no es válido": "The email format is not valid",
      "La contraseña debe tener 8 caracteres": "The password must have 8 characters",
      "Ciclismo": "Cycling",
      "Correr": "Running",
      "Nadar": "Swimming",
      "Cerrar": "Close",
      "Sesión de Ciclismo": "Cycling Session",
        "Sesión de Correr": "Running Session",
        "Sesión de Nadar": "Swimming Session",
      "around": "around",
      "minutes": "minutes",
      "horas": "hours",
      "Recorrido alrededor de": "Tour around"
    },
  },
  es: {
    translation: {
      "Login": "Iniciar sesión",
      "Email": "Correo electrónico",
      "Password": "Contraseña",
      "Log in": "Iniciar sesión",
      "The email format is not valid": "El formato del correo no es válido",
      "The password must have 8 characters": "La contraseña debe tener 8 caracteres",
      "Cycling": "Ciclismo",
      "Running": "Correr",
      "Swimming": "Nadar",
      "Close": "Cerrar",
      "Cycling Session": "Sesión de Ciclismo",
      "Running Session": "Sesión de Correr",
      "Swimming Session": "Sesión de Nadar",
      "around": "alrededor de",
      "minutes": "minutos",
      "hours": "horas",
      "Tour around": "Recorrido alrededor de"
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Lenguaje por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

  ```
