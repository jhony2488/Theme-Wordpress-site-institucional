/* eslint-disable prefer-const */
const posicaoInicial = $('#header').position().top
$(document).scroll(() => {
    // oscultador de scroll
    let posicaoScroll = $(document).scrollTop() // obtem a quantidade de scroll no momento
    if (posicaoInicial < posicaoScroll) {
        $('#header').animate({ opacity: 0.8 }, 500)
        $('#header').css(
            'background',
            'linear-gradient(114deg, #250e8a, #00faf7)'
        )
    } else {
        $('#header').css('background', 'transparent')
    }
})
