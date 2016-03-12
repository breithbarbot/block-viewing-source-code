/*  =============================================  *
 *  =============================================  *
 *  Document   : blkviewsrccode.js                 *
 *  Created on : 05 December 2013                  *
 *  Author     : Breith Barbot                     *
 *  Description: JS This is a script that prevents *
 *               the client from seeing your       *
 *               source code of your website.      *
 *  =============================================  *
 *  =============================================  */
(function () {
    /*  =============================================  *
     *  Anti-copyright ( Right click)
     *  =============================================  */
    $(document).bind("contextmenu", function (e) {
        e.preventDefault();
        $(".custom-rclick").css({top: e.pageY + "px", left: e.pageX + "px"}).show();
        $('.custom-rclick ul li a').attr('target', '_blank').css({'padding-top': '5px', 'padding-bottom': '10px'});
        $('.custom-rclick ul li').css('float', 'none');
        $('.custom-rclick ul li.active a').css('color', '#fff');

        if ($(e.target).attr('id') !== 'exclude') {
            $("div.custom-rclick").hide();
            showMessage();
        }

    }).bind("click", function () {
        $("div.custom-rclick").hide();
    });

    /*  =============================================  *
     *  Anti-copyright (Key(s))
     *  =============================================  */
    $(document).on('keydown', function (e) {
        (!e.ctrlKey) ? e.preventDefault() : '';
        // if function detectKeys is TRUE    &&    modal is not opened
        if (detectKeys(e) && ($('.modal-backdrop').val() === undefined)) {
            // Show message
            showMessage();
        }
    });
})();


/**
 * @param e
 * @returns {boolean}
 *
 *      Keys :
 *      --------
 *      ctrlKey
 *      altKey
 *      shiftKey
 *      which
 *      metaKey
 *      c = 67
 *      i = 73
 *      u = 85
 *      j = 74
 *      d = 68
 *      F2 = 113
 *      F12 = 123
 *
 *
 *      To view the key events
 *      console.log('Key ' + e.which);
 */
function detectKeys(e) {
    var ctrl_shift, alt_meta, ctrl_shift_c, ctrl_shift_i, ctrl_shift_j, ctrl_u, ctrl_shift_d, maj_f2, f12 = false;

    // Ctrl + Shift keys detect
    if ((e.ctrlKey === true) && (e.shiftKey === true)) {
        ctrl_shift = true;
    }

    // Alt + Cmd(mac) keys detect
    if ((e.altKey === true) && (e.metaKey === true)) {
        alt_meta = true;
    }

    // Ctrl + Shift + c | keys detect
    if ((ctrl_shift === true) && (e.which === 67)) {
        ctrl_shift_c = true;
    }

    // Ctrl + Shift + i OR  Alt + Cmd + i | keys detect
    if (((ctrl_shift === true) && (e.which === 73)) || ((alt_meta === true) && (e.which === 73))) {
        ctrl_shift_i = true;
    }

    // Ctrl + Shift + j OR  Alt + Cmd + j | keys detect
    if (((ctrl_shift === true) && (e.which === 74)) || ((alt_meta === true) && (e.which === 74))) {
        ctrl_shift_j = true;
    }

    // Ctrl + u OR  Alt + Cmd + u | keys detect
    if (((e.ctrlKey === true) && (e.which === 85)) || ((alt_meta === true) && (e.which === 85))) {
        ctrl_u = true;
    }

    // Ctrl + Shift + d | keys detect
    if ((ctrl_shift === true) && (e.which === 68)) {
        ctrl_shift_d = true;
    }

    // Maj/Shift + F2 | key detect
    if ((e.shiftKey === true) && (e.which === 113)) {
        maj_f2 = true;
    }

    // F12 | key detect
    if (e.which === 123) {
        f12 = true;
    }

    return (ctrl_shift_c || ctrl_shift_i || ctrl_shift_j || ctrl_u || ctrl_shift_d || maj_f2 || f12) ? true : false;
}


/*  =============================================  *
 *  Anti-copyright (function showMessage)
 *  =============================================  */
function showMessage() {
    var customTextUser = ' /* Your custom text... */';
    var customText = '<h1 class="text-danger text-center">Warning</h1><br><p>Hi !<br>' + customTextUser + '</p></div>';

    $('#info-code-source .modal-body').html(customText);
    $('#info-code-source').modal({backdrop: 'static'}, 'show');
}