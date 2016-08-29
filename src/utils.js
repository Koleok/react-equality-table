/* eslint-disable eqeqeq */
import r from 'ramda';

export const strict = r.curry((x, y) => x === y);
export const loose = r.curry((x, y) => x == y);

export const makeStates =
  r.converge(r.zipObj, [r.identity, r.map(r.toString)]);

export const makeMatrix =
  (fs, xs) => r.map(r.map(r.__, xs), fs);

export const eqMatrix = r.curry(
  (f, xs) => r.converge(makeMatrix, [r.map(f), r.identity])(xs)
);
