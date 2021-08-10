import { data } from '../../data.js';
import { read } from './read.js';

describe('read: reads an entry from data', () => {
  beforeEach(() => {
    Object.keys(data).forEach((key) => delete data[key]);
  });
  it('reads things that exist', () => {
    data.toad = 'not a frog';
    expect(read('toad')).toEqual('not a frog');
  });
  it('throws if the key does not exist', () => {
    expect(() => read('noop')).toThrow(ReferenceError);
  });
});
