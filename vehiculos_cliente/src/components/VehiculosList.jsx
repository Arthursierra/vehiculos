import { useEffect, useState } from "react";
import { getAll } from "../api/vehiculos.api";
import DataTable from 'react-data-table-component';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {Filters} from "./Filters"
export function VehiculosList() {
  const [vehiculos, setVehiculos] = useState([]);
  const navigate = useNavigate();
  var row={};
  const columns = [
      {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,
      },
      {
        name: 'Año',
        selector: row => row.anio,
        sortable: true,
      },
      {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,
      },
      {
        name: 'Precio',
        selector: row => row.precio,
        sortable: true,
      }
  ];

  useEffect(() => {
    const fetchData = async () => {
        const res = await getAll();
        setVehiculos(res.data); 
    }
    fetchData();
  }, []);

  const handleChange = ({ selectedRows }) => {
    if (selectedRows.length>1){
         toast.error("selecciona solo un vehiculo", {
            position: "bottom-right",
            style: {
              background: "#101010",
              color: "#fff",
            },
        });
    }else{
        if(selectedRows!=undefined){
          row=selectedRows[0];
        }
    }
  };
  return (
      <div>
        <button className="bg-indigo-500 p-3 rounded-lg" onClick={() => {
        navigate('/vehiculos/'+row.id);
         }}>
          Editar
        </button>
        <Filters />
        <h2>Vehiculos</h2>
        <DataTable
          columns={columns}
          data={vehiculos}
          selectableRows
          onSelectedRowsChange={handleChange}
          pagination 
        />
      </div>
  );
}