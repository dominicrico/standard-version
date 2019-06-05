// TODO: this should be replaced with an object we maintain and
// describe in: https://github.com/conventional-changelog/conventional-changelog-config-spec
const spec = require('conventional-changelog-config-spec')
const loader = require('conventional-changelog-preset-loader')

module.exports = (args) => {
  let preset = args.preset || 'conventionalcommits'
  if (preset === 'conventionalcommits') {
    preset = {
      name: preset
    }
    Object.keys(spec.properties).forEach(key => {
      if (args[key] !== undefined) preset[key] = args[key]
    })
  } else if (typeof args.preset === 'string') {
    preset = loader(args.preset)
  }
  return preset
}
