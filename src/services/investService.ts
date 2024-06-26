import axios from 'axios';

const API_URL = 'http://localhost:4000/api/servicoinvest';

export const createInvest = async (invest: any) => {
  const response = await axios.post(`${API_URL}/create`, invest);
  return response.data;
};

export const listInvests = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response.data;
};

export const getInvestById = async (id: string) => {
  const response = await axios.get(`${API_URL}/listforid/${id}`);
  return response.data;
};

export const listMoreMonths = async () => {
  const response = await axios.get(`${API_URL}/listmoremonths`);
  return response.data;
};

export const listForAge = async () => {
  const response = await axios.get(`${API_URL}/listforage`);
  return response.data;
};

export const listForRisk = async (nivelRisco: string) => {
  const response = await axios.get(`${API_URL}/listforrisk`, { params: { nivelRisco } });
  return response.data;
};

export const updateInvest = async (id: string, invest: any) => {
  const response = await axios.patch(`${API_URL}/update/${id}`, invest);
  return response.data;
};

export const deleteInvest = async (id: string) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};

export const calculateResult = async (id: string) => {
  const response = await axios.get(`${API_URL}/result/${id}`);
  return response.data;
};
