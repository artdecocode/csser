import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import csser from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof csser, 'function')
  },
  async 'calls package without error'() {
    await csser()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await csser({
      text,
    })
    ok(res, text)
  },
}

export default T