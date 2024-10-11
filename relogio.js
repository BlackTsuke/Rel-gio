export default class Relogio {
  constructor(second, minute, hour) {
    this.second = document.querySelector(second)
    this.minute = document.querySelector(minute)
    this.hour = document.querySelector(hour)
  }
  calcGraus() {
    const data = new Date()

    const pegarSegundos = data.getSeconds()
    const pegarMinutos = data.getMinutes()
    const pegarHoras = data.getHours()

    const segundosGraus = (pegarSegundos / 60) * 360
    const minutosGraus = (pegarMinutos / 60) * 360 + (pegarSegundos / 60) * 6 + 90
    const horasGraus = (pegarHoras / 12) * 360 + (pegarMinutos / 60) * 30 + 90

    this.second.style.transform = `rotate(${segundosGraus}deg)`
    this.minute.style.transform = `rotate(${minutosGraus}deg)`
    this.hour.style.transform = `rotate(${horasGraus}deg)`
  }
  intervalo() {
    setInterval(this.calcGraus, 1000)
  }
  bindEvents() {
    this.calcGraus = this.calcGraus.bind(this)
  }
  init() {
    this.bindEvents()
    this.intervalo()
    return this
  }
}