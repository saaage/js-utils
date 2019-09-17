import get from 'lodash.get'

// is a thing null/undefined?
export const isNil = arg => arg === null || arg === undefined

// returns a new object containing only the keys selected
export const selectKeys = (obj, keys) => {
  const map = {}
  keys.forEach(k => (map[k] = obj[k]))
  return map
}

// returns a new object with keys removed
export const removeKeys = (obj, keys) => {
  const clone = {...obj}
  keys.forEach(k => delete clone[k])
  return clone
}

// if arg is null or undefined, returns value
export const ifAbsent = (arg, value) => {
  if (isNil(arg)) {
    return value
  } else return arg
}

// mock some fn that takes a specific amount of time
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// does the collection contain the value? (using f to derive comparison value as it iterates over collection)
// if derive fn is not provided, checks collection for value itself
export const contains = (coll, value, derive) => {
  if (derive) {
    let result = false
    coll.forEach(i => {
      if (derive(i) === value) result = true
    })
    return result
  }

  return coll.indexOf(value) > -1 ? true : false
}


// removes the first instance of value from the collection
export const removeValue = (coll, val) => {
  const result = Array.from(coll)
  const index = result.indexOf(val)
  if (index !== -1) result.splice(index, 1)
  return result
}

// mutates obj[key] using fn and returns obj
export const update = (obj, key, fn) => {
  obj[key] = fn(obj[key])
  return obj
}

export const compareUsingKey = (a, b, key) => {
  if ((get(a, key)).toLowerCase() < get(b, key).toLowerCase()) return -1
  if (get(a, key).toLowerCase() > get(b, key).toLowerCase()) return 1
  return 0
}
