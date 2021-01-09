/* eslint-disable prefer-const */
const posicaoInicial = $('#header').position().top
$(document).scroll(() => {
    // oscultador de scroll
    let posicaoScroll = $(document).scrollTop() // obtem a quantidade de scroll no momento
    if (posicaoInicial < posicaoScroll) {
        $('#home #header').animate({ opacity: 0.8 }, 500)
        $('#home #header').css(
            'background',
            'linear-gradient(114deg, #250e8a, #00faf7)'
        )
    } else {
        $('#home #header').css('background', 'transparent')
    }
})
