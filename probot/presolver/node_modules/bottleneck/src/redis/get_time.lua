redis.replicate_commands()

local get_time = function ()
  local time = redis.call('time')

  return tonumber(time[1]..string.sub(time[2], 1, 3))
end
