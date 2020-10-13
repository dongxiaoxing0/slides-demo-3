
$images = $('.imgs > img')
$images.eq(0).clone().appendTo($(imgs))
$images.eq($images.length - 1).clone().prependTo($(imgs))

$buttons = $('.buttons > button')
$imgs = $('#imgs')
let current
let index

for (let i = 0; i < $buttons.length; i++) {
    $buttons.eq(i).on('click', (e) => {
        index = $(e.currentTarget).index()
        goToIndex(index)
    })
}

let timer
let n = 0
let size = $buttons.length
setTimer()
document.onvisibilitychange = function () {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        setTimer()
    }
}



function setTimer() {
    timer = setInterval(() => {
        goToIndex(n % size)
        console.log(n%size)
        n += 1
    }, 2000)
}
function goToIndex(index) {
    let p = -(index + 1) * 400
    if (current === $buttons.length - 1 && index === 0) {
        $imgs.css({ 'margin-left': `${-($buttons.length + 1) * 400}px` })
            .one('transitionend', () => {
                $imgs.hide().offset()
                $imgs.css({ 'margin-left': `${p}px` }).show()
            })

    } else if (current === 0 && index === $buttons.length - 1) {
        $imgs.css({ 'margin-left': '0px' })
            .one('transitionend', () => {
                $imgs.hide().offset()
                $imgs.css({ 'margin-left': `${p}px` }).show()
            })

    } else {
        $imgs.css({ 'margin-left': `${p}px` })
    }
    current = index
    n = index
}