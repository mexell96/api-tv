import axios from "axios";
import { SHOWS_API } from "../constants/show"; 

export const getShows = async () => {
  try {
    const { data } = await axios.get(SHOWS_API);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getShow = async (id) => {
  try {
    const SHOW_API = `${SHOWS_API}/${id}`;
    const { data } = await axios.get(SHOW_API);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}