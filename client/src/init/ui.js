import { read } from '../data-access/read.js';
import { header } from '../components/header.js';

const greeting = read('greeting');

const greetingEl = header(greeting);

// input
document.getElementById('new-greeting').value = greeting;

// output
const outputEl = document.getElementById('output');
outputEl.innerHTML = '';
outputEl.appendChild(greetingEl);
