import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { VehiculosPage } from "./pages/VehiculosPage";
import { VehiculosForm } from "./pages/VehiculosForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/vehiculos" />} />
          <Route path="/vehiculos" element={<VehiculosPage />} />
          <Route path="/vehiculos/:id" element={<VehiculosForm />} />
          <Route path="/vehiculos-create" element={<VehiculosForm />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;