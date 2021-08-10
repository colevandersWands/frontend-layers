import { read } from '../data-access/read.js';
import { write } from '../data-access/write.js';

export const updateGreeting = newGreeting => {
  if (typeof newGreeting !== 'string') {
    // or error, or something better
    return read('greeting');
  } else {
    write('greeting', newGreeting);
    return newGreeting;
  }
};
