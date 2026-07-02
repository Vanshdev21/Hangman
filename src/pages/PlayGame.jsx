import { useLocation } from "react-router";

function PlayGame() {
  const location = useLocation();
  return <h1>{location.state.value}</h1>;
}

export default PlayGame;
