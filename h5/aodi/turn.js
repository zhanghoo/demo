const rangeX = 10, rangeY = 10,
      angle1 = 45, angle2 = -45
let carX1 = 0, carY1 = 0,
    carX2 = 0, carY2 = 0
    beforeCarAngle = 0

isTurn (pathPosition) {
  let nextCarPostion = {x: 0, y: 0}
  let currentCarAngle = 0
  if (carX1 === 0 && carX2 === 0) {
    // 初始位置都为0, 这里即得到下一点 carX2, carY2的坐标
    nextCarPostion = this.getBorderCarPosititon(carX1, carX1, pathPosition)
    carX2 = nextCarPosition.x
    carY2 = nextCarPosition.y
    beforeCarAngle = this.getAngle(carX1, carY1, carX2, carY2)
    // 移动一下点
    carX1 = carX2
    carY1 = carY2
    return false
  } else {
    nextCarPostion = this.getBorderCarPosititon(carX1, carX1, pathPosition)
    carX2 = nextCarPosition.x
    carY2 = nextCarPosition.y
    // 当前点和下一点的所成的夹角, 与当前点和上一点的夹角beforeCarAngle比较
    currentCarAngle = this.getAngle(carX1, carY1, carX2, carY2)
    // 两个线夹角
    let pathAngle = currentCarAngle - beforeCarAngle
    beforeCarAngle = currentCarAngle
    return (pathAngle <= angle1 || pathAngle >= angle2) ? true : false
  }
}

// 得到下一点，边界点
getBorderCarPosititon (carX1, carY1, pathPosition) {
  if (pathPosition.x = (carX1 + rangeX) && pathPosition.y = (carY1 + rangeY)) {
    return pathPosition
  } else {
    return false
  }
}

// 得到两点的夹角
getAngle (x0, y0, x1, y2) {
  // 两点x, y轴线的距离
  const x = Math.abs(x1 - x0)
  const y = Math.abs(y1 - y0)
  const dis = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  const cos = y / z
  // 反三角函数求弧度
  const radian = Math.acos(cos)
  // 将弧度转换成角度
  const angle = Math.floor(180 / (Math.PI / radian));
  return angle
}
