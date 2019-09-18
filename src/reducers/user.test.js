import { user } from '../reducers/user';

describe('user reducer', () => {

  let mockUser;
  beforeEach(() => {
    mockUser = {id: 1, name: "Katie"}
  });

  it('should return default state without a matching action', () => {
    const expected = null;
    const result = user(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error from state with with a CREATE_USER action', () => {
    const expected = mockUser;
    const result = user(undefined, { type: "CREATE_USER", user: mockUser});
    expect(result).toEqual(expected);
  });

  it('should return an error from state with with a REMOVE_USER action', () => {
    const expected = null;
    const result = user(undefined, { type: "REMOVE_USER"});
    expect(result).toEqual(expected);
  });

  it('should return default state with a BAD_ACTION', () => {
    const expected = null;
    const result = user(undefined, { type: 'BAD_ACTION'});
    expect(result).toEqual(expected);
  });
});