import axios from "axios";
import endpoints from "./data";

export const getTransactions = async () => {
  try {
    const { data } = await axios.get(endpoints.transactions);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(endpoints.transactions, transaction);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteATransaction = async (id) => {
  try {
    const response = await axios.delete(endpoints.transaction(id));
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getATransaction = async (id) => {
  try {
    const { data } = await axios.get(endpoints.transaction(id));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editATransaction = async (id, editData) => {
  try {
    const url = endpoints.transaction(id);
    const response = await axios.patch(url, editData);
    return response;
    
  } catch (error) {
    console.log(error);
    return null;
  }
}

// const usuarios = {
// name: "Estefania",
// apllido: "villan",
// edad : 26
// }

// const user = { ...usuarios, email:"niavillan@gmail.com", contraseña: "0123"}