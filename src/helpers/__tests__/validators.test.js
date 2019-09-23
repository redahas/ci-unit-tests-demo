import { add } from '../validators';

test('add: Adds two numbers together', () => {
  expect(add(2, 2)).toEqual(4);
});
