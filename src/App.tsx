import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default App;
