$.getJSON('data.json', function(data) {

    $('#mon').on('mouseover', () => {
        $('#txtMon').append(`<p class="hover">$`+ data[0].amount +`</p>`);
        $('#mon').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#mon').on('mouseleave', () => {
        $('#txtMon').html(``);
        $('#mon').css('background-color', 'hsl(10, 79%, 65%)');
    });

    $('#tue').on('mouseover', () => {
        $('#txtTue').append(`<p class="hover">$`+ data[1].amount +`</p>`);;
        $('#tue').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#tue').on('mouseleave', () => {
        $('#txtTue').html(``);
        $('#tue').css('background-color', 'hsl(10, 79%, 65%)');
    });

    $('#wed').on('mouseover', () => {
        $('#txtWed').append(`<p class="hover">$`+ data[2].amount +`</p>`);;
        $('#wed').css('background-color', 'hsla(186, 34%, 60%, .7)');
    });
    $('#wed').on('mouseleave', () => {
        $('#txtWed').html(``);
        $('#wed').css('background-color', 'hsl(186, 34%, 60%)');
    });

    $('#thu').on('mouseover', () => {
        $('#txtThu').append(`<p class="hover">$`+ data[3].amount +`</p>`);;
        $('#thu').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#thu').on('mouseleave', () => {
        $('#txtThu').html(``);
        $('#thu').css('background-color', 'hsl(10, 79%, 65%)');
    });

    $('#fri').on('mouseover', () => {
        $('#txtFri').append(`<p class="hover">$`+ data[4].amount +`</p>`);;
        $('#fri').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#fri').on('mouseleave', () => {
        $('#txtFri').html(``);
        $('#fri').css('background-color', 'hsl(10, 79%, 65%)');
    });

    $('#sat').on('mouseover', () => {
        $('#txtSat').append(`<p class="hover">$`+ data[5].amount +`</p>`);;
        $('#sat').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#sat').on('mouseleave', () => {
        $('#txtSat').html(``);
        $('#sat').css('background-color', 'hsl(10, 79%, 65%)');
    });

    $('#sun').on('mouseover', () => {
        $('#txtSun').append(`<p class="hover">$`+ data[6].amount +`</p>`);;
        $('#sun').css('background-color', 'hsla(10, 79%, 65%, .7)');
    });
    $('#sun').on('mouseleave', () => {
        $('#txtSun').html(``);
        $('#sun').css('background-color', 'hsl(10, 79%, 65%)');
    });
});