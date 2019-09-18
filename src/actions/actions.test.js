import { createUser, removeUser, hasErrored, clearError} from '../actions';

describe('Action Creators', () => {

  let mockUser, mockError;
  beforeEach(() => {
    const mockUser = {id: 1, name: "Katie"}
    const mockError = "This is a mock error"
  });

  it('should return an action object - createUser', () => {
    const expected = { type: 'CREATE_USER', user: mockUser};
    const result = createUser(mockUser);
    expect(result).toEqual(expected);
  });

  it('should return an action object - removeUser', () => {
    const expected = { type: 'REMOVE_USER' };
    const result = removeUser(mockUser);
    expect(result).toEqual(expected);
  });

  it('should return an action object - hasErrored', () => {
    const expected = { type: 'HAS_ERRORED', errorMsg: mockError };
    const result = hasErrored(mockError);
    expect(result).toEqual(expected);
  });

  it('should return an action object - clearError', () => {
    const expected = { type: 'CLEAR_ERROR'};
    const result = clearError(mockError);
    expect(result).toEqual(expected);
  });
})