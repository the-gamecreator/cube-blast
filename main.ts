namespace SpriteKind {
    export const bad = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(200)
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.setVelocity(0, -50)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.setVelocity(0, 50)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.setVelocity(50, 0)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.setVelocity(-50, 0)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.bad, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    statusbar.value += -0.3
    info.changeScoreBy(1)
})
let bullet_place = 0
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
info.setLife(20)
story.showPlayerChoices("play", "play")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . 5 f f 2 . . . . . . . 
    . . . . . 5 f f 2 . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let location = randint(0, 3)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 250
statusbar.attachToSprite(mySprite3)
if (location == 0) {
    mySprite3.setPosition(134, 54)
} else if (location == 1) {
    mySprite3.setPosition(10, 52)
} else if (location == 2) {
    mySprite3.setPosition(68, 10)
} else if (location == 3) {
    mySprite3.setPosition(76, 97)
}
mySprite3.follow(mySprite, 5)
forever(function () {
    pause(200)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bad)
    mySprite4.setPosition(mySprite3.x, mySprite3.y)
    for (let index = 0; index < 40; index++) {
        bullet_place = randint(0, 7)
        if (bullet_place == 0) {
            mySprite4.setVelocity(50, 50)
        } else if (bullet_place == 1) {
            mySprite4.setVelocity(-50, 50)
        } else if (bullet_place == 2) {
            mySprite4.setVelocity(-50, -50)
        } else if (bullet_place == 3) {
            mySprite4.setVelocity(50, -50)
        } else if (bullet_place == 4) {
            mySprite4.setVelocity(0, -50)
        } else if (bullet_place == 5) {
            mySprite4.setVelocity(50, 0)
        } else if (bullet_place == 6) {
            mySprite4.setVelocity(-50, 0)
        } else if (bullet_place == 7) {
            mySprite4.setVelocity(0, 50)
        }
    }
})
forever(function () {
    pause(5000)
    sprites.destroyAllSpritesOfKind(SpriteKind.bad)
})
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . 5 5 2 5 5 2 . . . . . 
        . . . . . 5 5 2 f f 2 . . . . . 
        . . . . . . . 2 f f 2 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . 2 f f 2 . . . . . 
        . . . . . 5 5 2 f f 2 . . . . . 
        . . . . . 5 5 2 5 5 2 . . . . . 
        . . . . . 5 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 5 5 5 . . . . 
        . . . . . . . . . 5 5 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . 2 f f 5 . . . . . 
        . . . . . . . 2 f f 5 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . 5 f f 2 . . . . . 
        . . . . . . . 5 f f 2 . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft)
    )
})
forever(function () {
    if (statusbar.value == 0) {
        sprites.destroy(mySprite3, effects.coolRadial, 1000)
    }
})
