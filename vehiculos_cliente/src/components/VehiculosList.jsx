import { useEffect, useState } from "react";
import { getAll } from "../api/vehiculos.api";
import { VehiculosCard } from "./VehiculosCard";

export function VehiculosList() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    async function loadVehiculos() {
      const res = await getAll();
      setVehiculos(res.data);
    }
    loadVehiculos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {vehiculos.map((vehiculo) => (
        <VehiculosCard key={vehiculo.id} vehiculo={vehiculo} />
      ))}
    </div>
  );
}