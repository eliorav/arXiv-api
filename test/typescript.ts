import { readFileSync } from 'fs'
import { join } from 'path'
import { parseResponseData } from '../index'

let data = readFileSync(join(__dirname, 'sample.xml'))
parseResponseData(data)
  .then(res => {
    if (res.totalResults !== 6123) {
      throw new Error('invalid result')
    }
    console.log('typescript setup is working')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
