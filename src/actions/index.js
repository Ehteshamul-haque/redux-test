export const IncrementNum = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const DecrementNum  = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}
