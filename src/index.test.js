import { sum, sub } from './index';

describe('sum', () => {
  it('sum a and b', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sub', () => {
  it('subtract b from a', () => {
    expect(sub(4, 1)).toBe(3);
  });
});
