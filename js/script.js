$.getJSON('../data.json', function(data) {

    $('span').eq(0).css('height', '2.5em');
    $('span').eq(1).css('height', '4.5em');
    $('span').eq(2).css('height', '7.5em');
    $('span').eq(3).css('height', '4.5em');
    $('span').eq(4).css('height', '3em');
    $('span').eq(5).css('height', '6.5em');
    $('span').eq(6).css('height', '3.5em');

    $('#mon').on('mouseover', () => {
        $('#txtMon').html(`<p class="hover">$`+ data[0].amount +`</p>`);
        $('#mon').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('.day #mon').on('mouseleave', () => {
        $('#mon').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtMon').html(``);
    });

    $('#tue').on('mouseover', () => {
        $('#txtTue').html(`<p class="hover">$`+ data[1].amount +`</p>`);
        $('#tue').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#tue').on('mouseleave', () => {
        $('#tue').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtTue').html(``);
    });

    $('#wed').on('mouseover', () => {
        $('#txtWed').html(`<p class="hover">$`+ data[2].amount +`</p>`);
        $('#wed').css('background-color', 'hsla(186, 34%, 60%, .7)');
    });
    $('#wed').on('mouseleave', () => {
        $('#wed').css('background-color', 'hsl(186, 34%, 60%)');
        $('#txtWed').html(``);
    });

    $('#thu').on('mouseover', () => {
        $('#txtThu').html(`<p class="hover">$`+ data[3].amount +`</p>`);
        $('#thu').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#thu').on('mouseleave', () => {
        $('#thu').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtThu').html(``);
    });

    $('#fri').on('mouseover', () => {
        $('#txtFri').html(`<p class="hover">$`+ data[4].amount +`</p>`);
        $('#fri').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#fri').on('mouseleave', () => {
        $('#fri').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtFri').html(``);
    });

    $('#sat').on('mouseover', () => {
        $('#txtSat').html(`<p class="hover">$`+ data[5].amount +`</p>`);
        $('#sat').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#sat').on('mouseleave', () => {
        $('#sat').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtSat').html(``);
    });

    $('#sun').on('mouseover', () => {
        $('#txtSun').html(`<p class="hover">$`+ data[6].amount +`</p>`);
        $('#sun').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#sun').on('mouseleave', () => {
        $('#sun').css('background-color', 'hsl(10, 79%, 65%)');
        $('#txtSun').html(``);
    });
});