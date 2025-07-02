import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createVehiculo, getVehiculo,updateVehiculo } from "../api/vehiculos.api";
import { toast } from "react-hot-toast";

export function VehiculosForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateVehiculo(params.id, data);
      toast.success("vehiculo actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createVehiculo(data);
      toast.success("Vehiculo guardado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/vehiculos");
  });

  useEffect(() => {
    async function loadVehiculo() {
      if (params.id) {
        const { data } = await getVehiculo(params.id);
        setValue("marca", data.marca);
        setValue("anio", data.anio);
        setValue("modelo", data.modelo);
        setValue("precio", data.precio);
      }
    }
    loadVehiculo();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Marca"
          {...register("marca", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.marca && <span>Campo requerido</span>}

        <input
          type="text"
          placeholder="Año"
          {...register("anio", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.anio && <span>Campo requerido</span>}

        <input
          type="text"
          placeholder="Modelo"
          {...register("modelo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.modelo && <span>Campo requerido</span>}

        <input
          type="text"
          placeholder="Precio"
          {...register("precio", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.precio && <span>Campo requerido</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>
    </div>
  );
}