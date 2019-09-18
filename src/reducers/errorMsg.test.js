import { errorMsg } from '../reducers/errorMsg';

describe('errorMsg reducer', () => {

  it('should return default state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error from state with a HAS_ERRORED action', () => {
    const expected = 'This is the error';
    const result = errorMsg(undefined, { type: "HAS_ERRORED", errorMsg: "This is the error" });
    expect(result).toEqual(expected);
  });

  it('should return an empty string from state with a CLEAR_ERROR action', () => {
    const expected = "";
    const result = errorMsg(undefined, { type: "CLEAR_ERRORED"});
    expect(result).toEqual(expected);
  });

  it('should return default state with a BAD_ACTION', () => {
    const expected = '';
    const result = errorMsg(undefined, { type: 'BAD_ACTION' });
    expect(result).toEqual(expected);
  });
});