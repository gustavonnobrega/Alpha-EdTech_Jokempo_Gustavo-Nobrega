input.onButtonPressed(Button.A, function () {
    if (user_choice == 0) {
        user_choice = 2
    } else {
        user_choice += -1
    }
    if (user_choice == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (user_choice == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (user_choice == 2) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # . . . .
            # # . # #
            # . . # .
            # # . # .
            `)
        user_choice = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    machine_choice = randint(0, 2)
    if (machine_choice == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (machine_choice == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (machine_choice == 2) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `)
    }
    if (machine_choice - user_choice == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (machine_choice - user_choice == 1 || machine_choice - user_choice == -2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (machine_choice - user_choice == -1 || machine_choice - user_choice == 2) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # . . . .
            # # . # #
            # . . # .
            # # . # .
            `)
        machine_choice = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (user_choice == 2) {
        user_choice = 0
    } else {
        user_choice += 1
    }
    if (user_choice == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (user_choice == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (user_choice == 2) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            # # . # .
            # . . . .
            # # . # #
            # . . # .
            # # . # .
            `)
        user_choice = 0
    }
})
let machine_choice = 0
let user_choice = 0
user_choice = 0
basic.forever(function () {
	
})
