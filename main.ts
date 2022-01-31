namespace SpriteKind {
    export const Image = SpriteKind.create()
}
function _ (comment: string) {
	
}
function smoothglide (target: Sprite, x: number, y: number, spd: number) {
    while (!(Math.round(target.x) == Math.round(x) && Math.round(target.y) == Math.round(y))) {
        target.x += (Math.round(x) - Math.round(target.x)) / spd
        target.y += (Math.round(y) - Math.round(target.y)) / spd
        pause(10)
    }
    target.setPosition(x, y)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Home") {
        Selectionmin = 1
        Selectionmax = 2
        Selection += -1
        if (Selection < Selectionmin) {
            Selection = Selectionmax
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Home" && Selection == 1) {
        Screen = "Game"
        Othertxt.destroy()
        Starttxt.destroy()
        Blockylogo.destroy()
        Gameerror = textsprite.create("Enjoy doggie")
        Gameerror.setOutline(1, 15)
        Gameerror.setPosition(80, 27)
        Doggie = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        Doggie.setPosition(75, 55)
        animation.runImageAnimation(
        Doggie,
        [img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . f f . 
            . . . 4 5 5 f f 5 5 6 f f 5 f . 
            . . . f 6 6 6 6 6 6 4 f 5 5 f . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . . f 5 4 5 f 5 f f f . . . 
            . . . . . f f f f f f f . . . . 
            `],
        500,
        true
        )
    } else if (Screen == "Home" && Selection == 2) {
        Screen = "None"
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Home") {
        Selectionmin = 1
        Selectionmax = 2
        Selection += 1
        if (Selection > Selectionmax) {
            Selection = Selectionmin
        }
    }
})
let Doggie: Sprite = null
let Gameerror: TextSprite = null
let Selectionmax = 0
let Selectionmin = 0
let Selection = 0
let Othertxt: TextSprite = null
let Starttxt: TextSprite = null
let Blockylogo: Sprite = null
let Screen = ""
Screen = "Startup"
color.setPalette(
color.Black
)
scene.setBackgroundColor(15)
let Blockystartuplogo = sprites.create(assets.image`blockylogobig`, SpriteKind.Image)
Blockystartuplogo.setPosition(80, 60)
color.startFade(color.Black, color.originalPalette)
pause(2000)
pause(2000)
color.startFade(color.originalPalette, color.Black)
pause(2000)
pause(2000)
Blockystartuplogo.destroy()
scene.setBackgroundImage(assets.image`cityscape`)
pause(2000)
pause(2000)
color.startFade(color.Black, color.originalPalette)
Blockylogo = sprites.create(assets.image`Blockylogosmall`, SpriteKind.Image)
Blockylogo.setPosition(80, 130)
pause(2000)
pause(2000)
smoothglide(Blockylogo, 80, 18, 30)
Starttxt = textsprite.create("Start game")
Starttxt.setOutline(1, 15)
Starttxt.setPosition(80, 43)
Othertxt = textsprite.create("Other")
Othertxt.setOutline(1, 15)
Othertxt.setPosition(80, 71)
Screen = "Home"
Selection = 1
forever(function () {
    if (Selection == 1) {
        Starttxt.setOutline(1, 6)
    } else {
        Starttxt.setOutline(1, 15)
    }
    if (Selection == 2) {
        Othertxt.setOutline(1, 6)
    } else {
        Othertxt.setOutline(1, 15)
    }
})
