import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import csser from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await csser({
      text: this.input,
    })
    return res
  },
  context: Context,
})