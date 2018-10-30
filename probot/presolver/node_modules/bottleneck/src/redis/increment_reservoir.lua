local settings_key = KEYS[1]
local running_key = KEYS[2]
local executing_key = KEYS[3]

local now = tonumber(ARGV[1])
local incr = tonumber(ARGV[2])

redis.call('hincrby', settings_key, 'reservoir', incr)

local reservoir = refresh_capacity(executing_key, running_key, settings_key, now, true)[3]

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(executing_key, running_key, settings_key, 0, 0, groupTimeout)

return reservoir
