import { data } from '../../data.js';

export const read = (key = '') => {
  if (key in data) {
    return data[key];
  } else {
    throw new ReferenceError(`"${key}" is not in data`);
  }
};
