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
