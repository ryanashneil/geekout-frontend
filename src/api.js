import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const getDonations = async () => {
  const { data } = await axios.get(API + "/donations");
  return data;
};
