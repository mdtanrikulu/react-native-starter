const people = [
  { name: 'Muhammed', age: 26 },
  { name: 'Musa', age: 26 },
  { name: 'Bartek', age: 26 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}