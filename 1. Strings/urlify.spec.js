const expect = require('chai').expect
const urlify = require('./urlify')

describe('URLify a given string', () => {
  it('Should replace spaces with `%20` and trim', () => {
    expect(urlify('Hi I am a string   ')).to.equal('Hi%20I%20am%20a%20string')
  })
})
