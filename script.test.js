const googleSearch = require('./script');


const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',

]

describe('Google Search', () => {
    it('This is a silly test', () => {
        //googleSearch('testtest', dbMock)

        expect('hello').toBe('hello')

    })

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })

    it('works with undefined and null', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('does not display more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})


