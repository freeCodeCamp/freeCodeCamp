local settings_key = KEYS[1]
local running_key = KEYS[2]
local executing_key = KEYS[3]

local now = tonumber(ARGV[1])

refresh_capacity(executing_key, running_key, settings_key, now, false)
