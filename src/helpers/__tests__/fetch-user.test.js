import { fetchUser } from '../fetch-user';
import axios from 'axios';

jest.mock('axios');

/**
 * Async function resolves via mocked dependency
 */
test('fetchUser: API call successful', async () => {
  const mockUser = {
    name: 'Mary Shelley',
  };
  const mockResponse = {
    data: {
      results: [mockUser],
    },
  };
  axios.get.mockResolvedValue(mockResponse);
  
  const User = await fetchUser();

  expect(User).toMatchObject(mockUser);
});


/**
 * Async function rejects via mocked dependency
 */
test('fetchUser: API call successful', async () => {
  const mockError = 'Async error';

  axios.get.mockRejectedValue(mockError);

  await expect(fetchUser()).rejects.toThrow(new Error(mockError));
});
