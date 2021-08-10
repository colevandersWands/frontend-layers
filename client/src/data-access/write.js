import { data } from '../../data.js';

export const write = (key = '', newValue) => {
  data[key] = newValue;
};
