import { 
  createUser, 
  removeUser, 
  hasErrored, 
  clearError, 
  addMessage,
  clearMessages
} from '../actions';

describe('Action Creators', () => {

  let mockUser, mockError, mockMessage;
  beforeEach(() => {
    mockUser = {id: 1, name: "Katie"}
    mockError = "This is a mock error"
    mockMessage = "This is a mock message"
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

  it('should return an action object = addMessage', () => {
    const expected = { type: 'ADD_MESSAGE', message: mockMessage};
    const result = addMessage(mockMessage);
    expect(result).toEqual(expected);
  });

  it('should return an action object = clearMessages', () => {
    const expected = { type: 'CLEAR_MESSAGES'};
    const result = clearMessages();
    expect(result).toEqual(expected);
  });
})