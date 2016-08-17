const expect = require('chai').expect
const compress = require('./string-compression')

describe('Compress a String', () => {
  it('Should compress "aabbbccccc" and return "a2b3c5"', () => {
    expect(compress('aabbbccccc')).to.equal('a2b3c5')
  })
  it('Should compress "aabbcc" to "a2b2c2" but return "aabbcc" as it was not compressed', () => {
    expect(compress('aabbcc')).to.equal('aabbcc')
  })
})
