let target_date = '1 jan 2023'
let days_ = document.querySelector('#days')
let hours_ = document.querySelector('#hours')
let minutes_ = document.querySelector('#minutes')
let seconds_ = document.querySelector('#seconds')
let count_down = () => {
  let current_date = new Date()
  target_date = new Date(target_date)
  let total_seconds = (target_date - current_date) / 1000
  let days = Math.floor(total_seconds / (3600 * 24))
  let hours = Math.floor(total_seconds / 3600) % 24
  let minutes = Math.floor(total_seconds / 60) % 60
  let seconds = Math.floor(total_seconds) % 60
  console.log(days, hours, minutes, seconds)
  days_.innerHTML = format_time(days)
  hours_.innerHTML = format_time(hours)
  minutes_.innerHTML = format_time(minutes)
  seconds_.innerHTML = format_time(seconds)
}
setInterval(count_down, 1000)
let format_time = (time) => {
  return time < 10 ? `0${time}` : time
}