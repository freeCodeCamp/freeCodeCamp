local settings_key = KEYS[1]
local running_key = KEYS[2]
local executing_key = KEYS[3]

local now = tonumber(ARGV[1])
local clear = tonumber(ARGV[2])
local limiter_version = ARGV[3]

if clear == 1 then
  redis.call('del', settings_key, running_key, executing_key)
end

if redis.call('exists', settings_key) == 0 then
  -- Create
  local args = {'hmset', settings_key}

  for i = 4, #ARGV do
    table.insert(args, ARGV[i])
  end

  redis.call(unpack(args))
  redis.call('hmset', settings_key,
    'nextRequest', now,
    'lastReservoirRefresh', now,
    'running', 0,
    'done', 0,
    'unblockTime', 0
  )

else
  -- Apply migrations
  local current_version = redis.call('hget', settings_key, 'version')
  if current_version ~= limiter_version then
    local version_digits = {}
    for k, v in string.gmatch(current_version, "([^.]+)") do
      table.insert(version_digits, tonumber(k))
    end

    -- 2.10.0
    if version_digits[2] < 10 then
      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')
      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')
      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')
      redis.call('hsetnx', settings_key, 'done', 0)
      redis.call('hset', settings_key, 'version', '2.10.0')
    end

    -- 2.11.1
    if version_digits[2] < 11 and version_digits[3] < 1 then
      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then
        redis.call('hmset', settings_key,
          'lastReservoirRefresh', now,
          'version', '2.11.1'
        )
      end
    end
  end

  refresh_capacity(executing_key, running_key, settings_key, now, false)
end

local groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))
refresh_expiration(executing_key, running_key, settings_key, 0, 0, groupTimeout)

return {}
