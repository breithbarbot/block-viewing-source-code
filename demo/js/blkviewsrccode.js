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

/*  =============================================  *
 *  Anti-copyright ( Right click)
 *  =============================================  */
(function () {
    $(document).bind("contextmenu",function (e) {
        e.preventDefault();
        $(".custom-rclick").css({top: e.pageY + "px", left: e.pageX + "px"}).show();
        $('.custom-rclick ul li a').attr('target', '_blank').css({'padding-top': '5px', 'padding-bottom': '10px'});
        $('.custom-rclick ul li').css('float', 'none');
        $('.custom-rclick ul li.active a').css('color', '#fff');
    }).bind("click", function () {
            $("div.custom-rclick").hide();
        });
})();

/* (function () {
 if (ipclient !== '127.0.0.1') {
 $(document).on("contextmenu", function (e) {

 var ex = 'div#exclude';
 if ($(ex).length > 1) {
 var exclude = $('div#exclude');
 } else {
 var exclude = $(window);
 }

 // To view the click right events
 //          console.log('Click right ' + e.which);

 // If this is not # exclude or one of his children
 if (!$(e.target).is(exclude) && !$.contains(exclude[0], e.target)) {

 //STOP default action
 e.preventDefault();

 // Show custom message
 showMessage();
 return false;
 }
 });
 }
 })(); */


/*  =============================================  *
 *  Anti-copyright (Key(s))
 *  =============================================  */
(function () {
//    if (ipclient !== '127.0.0.1') {
    $(document).on('keydown', function (e) {
        if ($('.modal-backdrop').val() === undefined) {
//                ctrlKey
//                altKey
//                shiftKey
//                which
//                metaKey
//                c = 67
//                i = 73
//                u = 85
//                j = 74
//                d = 68
//                F2 = 113
//                F12 = 123
//
//                To view the key events
//                console.log('Key ' + e.which);

            // Ctrl + Shift keys detect
            if (e.ctrlKey === true && e.shiftKey === true) {
                var ctrl_shift = true;
            }

            // Alt + Cmd(mac) keys detect
            if (e.altKey === true && e.metaKey === true) {
                var alt_meta = true;
            }

            // Ctrl + Shift + c | keys detect
            if (ctrl_shift === true && e.which === 67) {
                var ctrl_shift_c = true;
            }

            // Ctrl + Shift + i OR  Alt + Cmd + i | keys detect
            if ((ctrl_shift === true && e.which === 73) || (alt_meta === true && e.which === 73)) {
                var ctrl_shift_i = true;
            }

            // Ctrl + Shift + j OR  Alt + Cmd + j | keys detect
            if ((ctrl_shift === true && e.which === 74) || (alt_meta === true && e.which === 74)) {
                var ctrl_shift_j = true;
            }

            // Ctrl + u OR  Alt + Cmd + u | keys detect
            if ((e.ctrlKey === true && e.which === 85) || (alt_meta === true && e.which === 85)) {
                var ctrl_u = true;
            }

            // Ctrl + Shift + d | keys detect
            if (ctrl_shift === true && e.which === 68) {
                var ctrl_shift_d = true;
            }

            // Maj/Shift + F2 | key detect
            if (e.shiftKey === true && e.which === 113) {
                var maj_f2 = true;
            }

            // F12 | key detect
            if (e.which === 123) {
                var f12 = true;
            }

            if (ctrl_shift_c || ctrl_shift_i || ctrl_shift_j || ctrl_u || ctrl_shift_d || maj_f2 || f12) {
                //STOP default action
                e.preventDefault();
                /* Show message */
                showMessage();
            }
        } else {
            //STOP default action
            e.preventDefault();
        }
    });
//    }
})();


/*  =============================================  *
 *  Anti-copyright (function showMessage)
 *  =============================================  */
function showMessage() {
    var customTextUser = ' /* Your custom text... */';
    var customText = '<div id="info-code-source" class="modal fade in"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Hi ' + ip + '</h4></div><div class="modal-body"><h1 class="text-danger text-center">Warning</h1><br><p>Hi !' + customTextUser + '</p></div><div class="modal-footer"><button type="button" id="code-no" class="btn btn-danger">Brief...?</button><button type="button" class="btn btn-success" data-dismiss="modal">I understood</button></div></div></div></div>';
    $('#code-source').html(customText);
    $('#info-code-source').modal({backdrop: 'static'}, 'show');
    $('button#code-no').click(function (e) {

        // Request AJAX
        $.ajax({
            url: "badipclients.php",
            cache: false,
            success: function () {
                // Your code...or redirection ! :)
                $('#info-code-source').modal('hide');
            }
        });
        e.preventDefault();
    });
}