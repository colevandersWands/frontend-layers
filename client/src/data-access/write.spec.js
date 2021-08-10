import { data } from '../../data.js';
import { write } from './write.js';

describe('write: writes an entry to the data', () => {
  beforeEach(() => {
    Object.keys(data).forEach((key) => delete data[key]);
  });
  it('writes things that exist', () => {
    write('toad', 'not a frog');
    expect(data.toad).toEqual('not a frog');
  });
  it('overwrites things that do exist', () => {
    data.toad = 'a frog';
    write('toad', 'not a frog');
    expect(data.toad).toEqual('not a frog');
  });
});
