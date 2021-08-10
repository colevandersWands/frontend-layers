import { updateGreeting } from '../business-logic/update-greeting.js';
import { header } from '../components/header.js';

export const useInput = () => {
  debugger; // interaction entry point

  // process user input
  const newInput = document.getElementById('new-greeting').value;

  // do the core logic
  const toDisplay = updateGreeting(newInput);

  // render the new view
  const greetingEl = header(toDisplay);

  // update the UI
  const outputEl = document.getElementById('output');
  outputEl.innerHTML = '';
  outputEl.appendChild(greetingEl);
};
