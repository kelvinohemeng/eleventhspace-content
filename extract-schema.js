const {exec} = require('child_process')
const fs = require('fs')
const path = require('path')

const dest = path.resolve(__dirname, '../frontend/sanity-schema.json')

exec('sanity schema extract', (error, stdout) => {
  if (error) {
    console.error('Error extracting schema:', error)
    process.exit(1)
  }

  fs.writeFileSync(dest, stdout)
  console.log('✅ sanity-schema.json extracted to frontend.')
})
