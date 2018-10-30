local settings_key = KEYS[1]
local running_key = KEYS[2]
local executing_key = KEYS[3]

local now = tonumber(ARGV[1])
local weight = tonumber(ARGV[2])

local capacity = refresh_capacity(executing_key, running_key, settings_key, now, false)[1]
local nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))

return conditions_check(capacity, weight) and nextRequest - now <= 0
