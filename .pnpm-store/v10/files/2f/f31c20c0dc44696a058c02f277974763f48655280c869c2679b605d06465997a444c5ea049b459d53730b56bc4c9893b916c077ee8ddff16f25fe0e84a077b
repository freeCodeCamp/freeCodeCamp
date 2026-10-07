'use strict'

const nullTime = () => ''

const epochTime = () => `,"time":${Date.now()}`

const unixTime = () => `,"time":${Math.round(Date.now() / 1000.0)}`

const isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability

const NS_PER_MS = 1_000_000n
const NS_PER_SEC = 1_000_000_000n

const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS
const startHrTime = process.hrtime.bigint()

const isoTimeNano = () => {
  const elapsedNs = process.hrtime.bigint() - startHrTime
  const currentTimeNs = startWallTimeNs + elapsedNs

  const secondsSinceEpoch = currentTimeNs / NS_PER_SEC
  const nanosWithinSecond = currentTimeNs % NS_PER_SEC

  const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n)
  const date = new Date(msSinceEpoch)

  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond
    .toString()
    .padStart(9, '0')}Z"`
}

module.exports = { nullTime, epochTime, unixTime, isoTime, isoTimeNano }
