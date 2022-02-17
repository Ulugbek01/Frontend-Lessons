import React from "react";

const UserContext = React.createContext("foydalanuvchi");
export const UserProvider =
  UserContext.Provider; /* Ma'lumotni uzatish uchun foydalanamiz */
export const UserConsumer =
  UserContext.Consumer; /* Ma'lumotni qabul qilish uchun foydalanamiz */
