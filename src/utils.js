/* eslint-disable eqeqeq */
import r from 'ramda';

export const strictEq = r.curry((x, y) => x === y);
export const looseEq = r.curry((x, y) => x == y);

export const makeMatrix =
  (fs, xs) => r.map(r.map(r.__, xs), fs);

export const eqMatrix = r.curry(
  (f, xs) => r.converge(makeMatrix, [r.map(f), r.identity])(xs)
);
