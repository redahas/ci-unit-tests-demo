import axios from 'axios';
import get from 'lodash.get';

const URL = 'https://randomuser.me/api/?results=1';

export const fetchUser = async () => {
  try {
    const response = await axios.get(URL);
    const users = get(response, ['data', 'results'], []);
  
    return users[0];
  } catch (error) {
    throw new Error(error);
  }
};
