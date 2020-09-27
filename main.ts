// Both eyes on the smiley face blink (turn off) 4 times when the B button is pressed. After blinking the smiley face has both eyes open.
input.onButtonPressed(Button.B, function () {
    // blinks the face's right eye (left to the user) 4 times
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
