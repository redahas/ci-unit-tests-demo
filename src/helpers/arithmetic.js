// export const add = (a, b) => a + b;

// export const add = (a = 0, b = 0) => a + b;

export const add = (a = 0, b = 0) => parseInt(a) + parseInt(b);

export const getSum = (...params) => params.reduce((acc, curr) => {
  return acc + parseInt(curr);
}, 0);
