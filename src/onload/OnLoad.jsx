import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnLoad = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
};

export default OnLoad;
