namespace SpriteKind {
    export const Image = SpriteKind.create()
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
    Selectionmin = 1
    Selectionmax = 2
    Selection += -1
    if (Selection < Selectionmin) {
        Selection = Selectionmax
    }
})
let Selection = 0
let Selectionmax = 0
let Selectionmin = 0
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
let Blockylogo = sprites.create(assets.image`Blockylogosmall`, SpriteKind.Image)
Blockylogo.setPosition(80, 130)
pause(2000)
pause(2000)
smoothglide(Blockylogo, 80, 18, 30)
let Starttxt = textsprite.create("Start game")
Starttxt.setOutline(1, 15)
Starttxt.setPosition(80, 43)
let Othertxt = textsprite.create("Other")
Othertxt.setOutline(1, 15)
Othertxt.setPosition(80, 71)
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
