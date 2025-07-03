import axios from "axios";
const Api = axios.create({
  baseURL: 'http://localhost:8000/vehiculos/api/v1/marcas',
});

export const getAll = () => Api.get("/");

export const getVehiculo = (id) => Api.get(`/${id}`);

export const updateVehiculo = (id, vehiculo) => Api.put(`/${id}/`, vehiculo);

export const createVehiculo = (vehiculo) => Api.post("/", vehiculo);

export const getAllByFilter = (vehiculo) => Api.post("/", vehiculo);