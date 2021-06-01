let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 4)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
