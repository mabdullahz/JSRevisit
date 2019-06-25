function delayer (duration) {
  return new Promise(function (resolve, reject) {
    if (duration >= 2000) {
      reject(new Error('Too long!'))
    } else {
      setTimeout(() => resolve('Done ' + duration), duration)
    }
  })
}

delayer(2000).catch(
  (err) => console.log(err.name)
)

console.log('Middle')

delayer(500).then(
  (res) => console.log(res)
)
