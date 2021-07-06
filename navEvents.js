var xDown = null
var yDown = null

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ) // jQuery
}

export function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0]
  xDown = firstTouch.clientX
  yDown = firstTouch.clientY
}

export function handleTouchMove(evt, router, pathUp, pathDown) {
  if (!xDown || !yDown) {
    return
  }

  var xUp = evt.touches[0].clientX
  var yUp = evt.touches[0].clientY

  var xDiff = xDown - xUp
  var yDiff = yDown - yUp

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      // console.log('swipe left')
    } else {
      /* right swipe */
      // console.log('swipe right')
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      router.push(`/${pathDown}`)
      // console.log('swipe up')
    } else {
      /* down swipe */
      router.push(`/${pathUp}`)
      // console.log('swipe down')
    }
  }
  /* reset values */
  xDown = null
  yDown = null
}

export const handleWheel = (evt,router, pathUp, pathDown) => {
  if (evt.deltaY < 0) {
    // console.log('scrolling up')
    router.push(`/${pathUp}`)
  } else if (evt.deltaY > 0) {
    router.push(`/${pathDown}`)
    // console.log('scrolling down')
  }
}
