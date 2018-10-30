local refresh_expiration = function (executing_key, running_key, settings_key, now, nextRequest, groupTimeout)

  if groupTimeout ~= nil then
    local ttl = (nextRequest + groupTimeout) - now

    redis.call('pexpire', executing_key, ttl)
    redis.call('pexpire', running_key, ttl)
    redis.call('pexpire', settings_key, ttl)
  end

end
