// src/utils/fetchData.test.js
import { fetchData } from './fetchData';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: 'Mocked Todo' }),
    })
);

test('fetchData returns mocked data', async () => {
    const data = await fetchData();
    expect(data).toEqual({ id: 1, title: 'Mocked Todo' });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
});
