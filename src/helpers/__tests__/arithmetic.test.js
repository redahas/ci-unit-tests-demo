import { getSum } from '../arithmetic';

// Option
// test('add: Adds two numbers together', () => {
//   expect(add(2, 2)).toEqual(4);
// });

// Option 2
// test.each`
//   a             | b         | expected
//   ${5}          | ${7}      | ${12}
//   ${0}          | ${-7}     | ${-7}
//   ${undefined}  | ${7}      | ${7}
//   ${'9'}        | ${10}     | ${19}
//   ${0.120}       | ${12.33}  | ${12.45}
//   `('add: $a plus $b should equal $expected', () => {
//   expect(add(2, 2)).toEqual(4);
// });


// Option 3
test.each([
  [
    'Positive numbers', // scenario description
    {
      params: [5, 7], // params
      expected: 12, // expected
    }
  ],
  [
    'Inclusion of a negative number',
    {
      params: [1, -7],
      expected: -6,
    }
  ],
  [
    'Inclusion of a string',
    {
      params: ['9', 10],
      expected: 19,
    }
  ],
])('getSum: %s', (_scenario, { params, expected}) => {
  expect(getSum(...params)).toEqual(expected);
});

test('getSum: Inclusion of an undefined number should return NaN', () => {
  const params = [undefined, 7];

  expect(getSum(...params)).toBeNaN();
});
