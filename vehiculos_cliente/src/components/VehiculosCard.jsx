import { useNavigate } from "react-router-dom";

export function VehiculosCard({ vehiculo }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/vehiculos/${vehiculo.id}`);
      }}
    >
        
        <h1 className="text-white font-bold uppercase rounded-lg">
        {vehiculo.marca}
      </h1>
      <h1 className="text-white font-bold uppercase rounded-lg">
        {vehiculo.anio}
      </h1>

      <h1 className="text-white font-bold uppercase rounded-lg">
        {vehiculo.modelo}
      </h1>

      <h1 className="text-white font-bold uppercase rounded-lg">
        {vehiculo.precio}
      </h1>
    </div>
  );
}