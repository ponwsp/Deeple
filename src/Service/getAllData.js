import axios from 'axios';

export const getUser = async () => {
  try {
    const response = await axios.get('https://localhost:1111/getlistAllPlayer');
    return response;
  }
  catch (e) {
    console.log(e)
  }
}

export const getDetail = async (id) => {
  try {
    const response = await axios.get('https://localhost:1111/getDetailById?id=' + id);
    return response;
  }
  catch (e) {
    console.log(e)
  }
}
