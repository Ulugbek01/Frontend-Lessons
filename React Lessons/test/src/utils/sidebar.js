import { Buyurtmalar } from "../components/Buyurtmalar";
import { Filiallar } from "../components/Filiallar";
import { Kategoriyalar } from "../components/Kategoriyalar";
import { Mahsulotlar } from "../components/Mahsulotlar";
import { Mijozlar } from "../components/Mijozlar";
import { Xisobot } from "../components/Xisobot";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    path: "/buyurtmalar",
    element: Buyurtmalar,
  },
  {
    id: 2,
    title: "Maxsulotlar",
    path: "/Maxsulotlar",
    element: Mahsulotlar,
  },
  {
    id: 3,
    title: "Kategoriyalar",
    path: "/Kategoriyalar",
    element: Kategoriyalar,
  },
  {
    id: 4,
    title: "Filiallar",
    path: "/Filiallar",
    element: Filiallar,
  },
  {
    id: 5,
    title: "Mijozlar",
    path: "/Mijozlar",
    element: Mijozlar,
  },
  {
    id: 6,
    title: "Xisobot",
    path: "/Xisobot",
    element: Xisobot,
  },
];
