function getContentRect(node, types) {
  const calculations = {}

  if (types.indexOf('client') > -1) {
    calculations.client = {
      top: node.clientTop,
      left: node.clientLeft,
      width: node.clientWidth,
      height: node.clientHeight,
    }
  }

  if (types.indexOf('offset') > -1) {
    calculations.offset = {
      top: node.offsetTop,
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight,
    }
  }

  if (types.indexOf('scroll') > -1) {
    calculations.scroll = {
      top: node.scrollTop,
      left: node.scrollLeft,
      width: node.scrollWidth,
      height: node.scrollHeight,
    }
  }

  if (types.indexOf('bounds') > -1) {
    const rect = node.getBoundingClientRect()
    calculations.bounds = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    }
  }

  if (types.indexOf('margin') > -1) {
    const styles = getComputedStyle(node)
    calculations.margin = {
      top: styles ? parseInt(styles.marginTop) : 0,
      right: styles ? parseInt(styles.marginRight) : 0,
      bottom: styles ? parseInt(styles.marginBottom) : 0,
      left: styles ? parseInt(styles.marginLeft) : 0,
    }
  }

  return calculations
}

export default getContentRect
