import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import Contato from "../screens/Contato";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="Contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
