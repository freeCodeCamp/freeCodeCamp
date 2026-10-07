function levenshteinD (s1, s2) {
  var d = []
  var i = 0

  for (i = 0; i <= s1.length; i++) d[i] = [i]
  for (i = 0; i <= s2.length; i++) d[0][i] = i

  s2.split('').forEach(function (c2, j) {
    s1.split('').forEach(function (c1, i) {
      if (c1 === c2) {
        d[i + 1][j + 1] = d[i][j]
        return
      }
      d[i + 1][j + 1] = Math.min(
        d[i][j + 1] + 1,
        d[i + 1][j] + 1,
        d[i][j] + 1
      )
    })
  })

  return d[s1.length][s2.length]
}

function meant (scmd, commands) {
  var d = []
  var bestSimilarity = []

  commands.forEach(function (cmd, i) {
    var item = {}
    item[levenshteinD(scmd, cmd)] = i
    d.push(item)
  })

  d.sort(function (a, b) {
    return Number(Object.keys(a)[0]) - Number(Object.keys(b)[0])
  })

  d.forEach(function (item) {
    var key = Number(Object.keys(item)[0])
    if (scmd.length / 2 >= key) {
      bestSimilarity.push(commands[item[key]])
    }
  })

  return bestSimilarity
}

module.exports = meant
