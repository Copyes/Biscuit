export default function extend() {
  let result = {}
  let i = 0
  let key = ''

  for (; i < arguments.length; ++i) {
    let attributes = arguments[i]

    for (key in attributes) {
      result[key] = attributes[key]
    }
  }

  return result
}
