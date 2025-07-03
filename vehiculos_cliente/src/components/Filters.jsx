import { useState } from "react";
import { getAllByFilter } from "../api/vehiculos.api";
import { useForm } from "react-hook-form";
export function Filters() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [vehiculos, setVehiculos] = useState([]);

    const onSubmit = handleSubmit(async (data) => {
      const res = await getAllByFilter(data);
        setVehiculos(res.data); 
  });

return (
<div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Precio inicial"
          {...register("precio_inicial", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.marca && <span>Campo requerido</span>}

        <input
          type="text"
          placeholder="Precio final"
          {...register("precio_final", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Filtrar
        </button>
      </form>
    </div>
    );
}    