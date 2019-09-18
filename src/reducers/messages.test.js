import { messages } from '../reducers/messages';

describe('messages reducer', () => {

  it('should return default state', () => {
    const expected = [];
    const result = messages(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return info from state with a ADD_MESSAGE action', () => {
    const expected = [{message: 'This is the message', isUser: false}];
    const result = messages(undefined, { type: "ADD_MESSAGE", message: "This is the message", isUser: false });
    expect(result).toEqual(expected);
  });

  it('should return an empty string from state with a CLEAR_MESSAGES action', () => {
    const expected = "";
    const result = messages(undefined, { type: "CLEAR_MESSAGES" });
    expect(result).toEqual(expected);
  });

  it('should return default state with a BAD_ACTION', () => {
    const expected = [];
    const result = messages(undefined, { type: 'BAD_ACTION' });
    expect(result).toEqual(expected);
  });
});