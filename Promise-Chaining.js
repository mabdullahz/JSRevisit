/* PROMISES - Chaining */
// PRINTS OUT HELLO 5 TIMES AFTER 1 SECOND EACH

function delayer (duration, num) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(++num), duration)
  })
}

delayer(1000, 0).then((num) => {
  console.log('Hello, ' + num + '!')
  delayer(1000, num).then((num) => {
    console.log('Hello, ' + num + '!')
    delayer(1000, num).then((num) => {
      console.log('Hello, ' + num + '!')
      delayer(1000, num).then((num) => {
        console.log('Hello, ' + num + '!')
        delayer(1000, num).then((num) => {
          console.log('Hello, ' + num + '!')
        })
      })
    })
  })
})

// APPROACH 2 - AVOIDING CALLBACK HELL

delayer(1000, 0)
  .then((num) => {
    console.log('Hello, ' + num + '!')
    return delayer(1000, num)
  })
  .then((num) => {
    console.log('Hello, ' + num + '!')
    return delayer(1000, num)
  })
  .then((num) => {
    console.log('Hello, ' + num + '!')
    return delayer(1000, num)
  })
  .then((num) => {
    console.log('Hello, ' + num + '!')
    return delayer(1000, num)
  })
  .then((num) => {
    console.log('Hello, ' + num + '!')
    return delayer(1000, num)
  })
