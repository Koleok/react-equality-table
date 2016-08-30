/* eslint-disable eqeqeq */
import r from 'ramda';

const flipMap = r.flip(r.map);
export const strict = r.curry((x, y) => x === y);
export const loose = r.curry((x, y) => x == y);

export const makeStates =
  r.converge(r.zipObj, [r.identity, r.map(r.toString)]);

export const makeMatrix =
  r.useWith(flipMap, [r.identity, flipMap]);

export const eqMatrix = r.curry(
  (f, xs) => r.converge(makeMatrix, [r.map(f), r.identity])(xs)
);
