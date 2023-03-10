import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Protected from "./layouts/protected";
import IsLogedIn from "./layouts/isLogedIn";
import CamapignAdd from "./pages/dashboard/camapignAdd";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Protected Component = {Dashboard} />} />
      <Route path="/auth/*" element={<IsLogedIn Component = {Auth} />} />
      {/* <Route path="/dashboard/*" element={<Protected Component = {Dashboard} />} /> */}
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    
    </Routes>
  );
}

export default App;
