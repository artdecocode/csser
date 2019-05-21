/* alanode example/ */
import csser from '../src'

(async () => {
  const res = await csser({
    text: 'example',
  })
  console.log(res)
})()