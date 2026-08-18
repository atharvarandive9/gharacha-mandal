import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/invitation-app"
        element={<InvitationPage />}
      />
    </Routes>
  );
}