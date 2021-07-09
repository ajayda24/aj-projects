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

export function handleTouchMove(
  evt,
  router,
  forward,
  backward,
  changeLoadingState
) {
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
      if (backward) {
        router.push(backward)
        changeLoadingState((prevState) => !prevState)
      }

      /* left swipe */
      // console.log('swipe left')
    } else {
      if (forward) {
        router.push(forward)
        changeLoadingState((prevState) => !prevState)
      }

      /* right swipe */
      // console.log('swipe right')
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      if (backward) {
        router.push(backward)
        changeLoadingState((prevState) => !prevState)
      }

      // console.log('swipe up')
    } else {
      /* down swipe */
      if (forward) {
        router.push(forward)
        changeLoadingState((prevState) => !prevState)
      }

      // console.log('swipe down')
    }
  }
  /* reset values */
  xDown = null
  yDown = null
}

export const handleWheel = (
  evt,
  router,
  forward,
  backward,
  changeLoadingState
) => {
  if (evt.deltaY < 0) {
    // console.log('scrolling up')
    setTimeout(() => {
      if (forward) {
        router.push(forward)
        changeLoadingState((prevState) => !prevState)
      }
    }, 200)
  } else if (evt.deltaY > 0) {
    setTimeout(() => {
      if (backward) {
        router.push(backward)
        changeLoadingState((prevState) => !prevState)
      }
    }, 200)

    // console.log('scrolling down')
  }
}
