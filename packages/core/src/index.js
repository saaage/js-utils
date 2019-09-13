export const isNil = arg => arg === null || arg === undefined

// takes an object and a key, returns the value or null
export const get = (obj, str) => {
  if (isNil(obj) || isNil(obj[str])) {
    return null
  } else return obj[str]
}

// returns a new object containing only the keys selected
export const selectKeys = (obj, keys) => {
  const map = {}
  keys.forEach(k => map[k] = obj[k])
  return map
}

// returns the passed object with keys removed
export const removeKeys = (obj, keys) => {
  keys.forEach(k => delete obj[k])
  return obj
}

// if null or undefined is received, returns an empty string
export const stringIfAbsent = arg => {
  if (isNil(arg)) {
    return ''
  } else return arg
}
