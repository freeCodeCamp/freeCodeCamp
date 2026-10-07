if ((ref$ = options.map) === 'linked' || ref$ === 'debug') {
  mapPath = path.basename(outputFilename) + ".map";
  result.code += "\n//# sourceMappingURL=" + mapPath + "\n";
} else {
  result.code += "\n//# sourceMappingURL=data:application/json;base64," + bufferFrom(result.map.toString()).toString('base64') + "\n";
}
