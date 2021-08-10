import { updateGreeting } from './update-greeting.js';
import { data } from '../../data.js';

describe('updateGreeting: updates the greeting', () => {
  beforeEach(() => {
    Object.keys(data).forEach((key) => delete data[key]);
  });
  it('adds a greeting when there is not one', () => {
    const newGreeting = updateGreeting('hello');
    expect(newGreeting).toEqual('hello');
  });
  it('over-writes previous greetings', () => {
    data.greeting = 'bye';
    const newGreeting = updateGreeting('hello');
    expect(newGreeting).toEqual('hello');
  });
});
