exports.load = (received, defaults, onto={}) ->
  for k, v of defaults
    onto[k] = received[k] ? v
  onto

exports.overwrite = (received, defaults, onto={}) ->
  for k, v of received
    if defaults[k] != undefined
      onto[k] = v
  onto
