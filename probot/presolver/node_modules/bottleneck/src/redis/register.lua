local settings_key = KEYS[1]
local running_key = KEYS[2]
local executing_key = KEYS[3]

local now = tonumber(ARGV[1])
local index = ARGV[2]
local weight = tonumber(ARGV[3])
local expiration = tonumber(ARGV[4])

local state = refresh_capacity(executing_key, running_key, settings_key, now, false)
local capacity = state[1]
local reservoir = state[3]

local settings = redis.call('hmget', settings_key,
  'nextRequest',
  'minTime',
  'groupTimeout'
)
local nextRequest = tonumber(settings[1])
local minTime = tonumber(settings[2])
local groupTimeout = tonumber(settings[3])

if conditions_check(capacity, weight) then

  if expiration ~= nil then
    redis.call('zadd', executing_key, now + expiration, index)
  end
  redis.call('hset', running_key, index, weight)
  redis.call('hincrby', settings_key, 'running', weight)

  local wait = math.max(nextRequest - now, 0)
  local newNextRequest = now + wait + minTime

  if reservoir == nil then
    redis.call('hset', settings_key,
    'nextRequest', newNextRequest
    )
  else
    reservoir = reservoir - weight
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'nextRequest', newNextRequest
    )
  end

  refresh_expiration(executing_key, running_key, settings_key, now, newNextRequest, groupTimeout)

  return {true, wait, reservoir}

else
  return {false}
end
