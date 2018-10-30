local refresh_capacity = function (executing_key, running_key, settings_key, now, always_publish)

  local compute_capacity = function (maxConcurrent, running, reservoir)
    if maxConcurrent ~= nil and reservoir ~= nil then
      return math.min((maxConcurrent - running), reservoir)
    elseif maxConcurrent ~= nil then
      return maxConcurrent - running
    elseif reservoir ~= nil then
      return reservoir
    else
      return nil
    end
  end

  local settings = redis.call('hmget', settings_key,
    'id',
    'maxConcurrent',
    'running',
    'reservoir',
    'reservoirRefreshInterval',
    'reservoirRefreshAmount',
    'lastReservoirRefresh'
  )
  local id = settings[1]
  local maxConcurrent = tonumber(settings[2])
  local running = tonumber(settings[3])
  local reservoir = tonumber(settings[4])
  local reservoirRefreshInterval = tonumber(settings[5])
  local reservoirRefreshAmount = tonumber(settings[6])
  local lastReservoirRefresh = tonumber(settings[7])

  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)

  --
  -- Compute 'running' changes
  --
  local expired = redis.call('zrangebyscore', executing_key, '-inf', '('..now)

  if #expired > 0 then
    redis.call('zremrangebyscore', executing_key, '-inf', '('..now)

    local make_batch = function ()
      return {'hmget', running_key}
    end

    local flush_batch = function (batch)
      local weights = redis.call(unpack(batch))
      batch[1] = 'hdel'
      local deleted = redis.call(unpack(batch))

      local sum = 0
      for i = 1, #weights do
        sum = sum + (tonumber(weights[i]) or 0)
      end
      return sum
    end

    local total = 0
    local batch_size = 1000

    for i = 1, #expired, batch_size do
      local batch = make_batch()
      for j = i, math.min(i + batch_size - 1, #expired) do
        table.insert(batch, expired[j])
      end
      total = total + flush_batch(batch)
    end

    if total > 0 then
      redis.call('hincrby', settings_key, 'done', total)
      running = tonumber(redis.call('hincrby', settings_key, 'running', -total))
    end
  end

  --
  -- Compute 'reservoir' changes
  --
  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil
  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then
    reservoir = reservoirRefreshAmount
    redis.call('hmset', settings_key,
      'reservoir', reservoir,
      'lastReservoirRefresh', now
    )
  end

  --
  -- Broadcast capacity changes
  --
  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)

  if always_publish or (
    -- was not unlimited, now unlimited
    initial_capacity ~= nil and final_capacity == nil
  ) or (
    -- capacity was increased
    initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity
  ) then
    redis.call('publish', 'b_'..id, 'capacity:'..final_capacity)
  end

  return {final_capacity, running, reservoir}
end
