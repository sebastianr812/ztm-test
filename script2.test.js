const fetch = require('node-fetch');
const swapi = require('./script2');



it('calls swapi to get people', () => {
    expect.assertions(2)
    return swapi.getPeopleAwait(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5)

    })
})

// it('calls swapi to get people with promise', () => {
//     return swapi.getPeoplePromise(fetch)
//         .then((stuff) => {
//             expect(stuff.count).toEqual(82)

//         })
// }) 


it('get people returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 82,
            results: [1, 2, 3, 4, 5, 6, 7]
        })
    }))

    expect.assertions(4)
    return swapi.getPeopleAwait(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/')
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5)
    })
})