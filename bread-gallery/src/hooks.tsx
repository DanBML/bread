import { useLocation } from "react-router-dom";

type Topic = "bread" | "coding";

export const useTopic = (): Topic => {
  const location = useLocation();

  return location.pathname === "/bread-gallery" ? "bread" : "coding";
};
