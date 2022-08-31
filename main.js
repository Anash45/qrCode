//Forms Toggler

$('.options').click(function() {

    $('.form-box').hide();

    $('.options').removeClass('active');

    $(this).addClass('active');

    var form = $(this).attr('form');

    $('#' + form).show();

});



//FORMS VALIDATION

(function() {

    'use strict';

    window.addEventListener('load', function() {

        // Récupérer tous les formulaires auxquels nous voulons appliquer des styles de validation Bootstrap personnalisés.

        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission

        var validation = Array.prototype.filter.call(forms, function(form) {

            form.addEventListener('submit', function(event) {

                if (form.checkValidity() === false) {

                    event.preventDefault();

                    event.stopPropagation();

                }

                form.classList.add('was-validated');

            }, false);

        });

    }, false);

})();





// Soumission des formulaires PRevent

$('form').submit(function(e) {

    e.preventDefault();

});



// URL QR CODE

$('#url_form').submit(function(e) {

    var url = accent($('#u_url').val());

    if (url != '') {

        var range = accent($('#u_range').val());



        var type = $('.u_format:checked').val();

        var ecc = $('.u_ecc:checked').val();
        var color = $('#u_color').val().substring(1);

        var format = url;

        $('.result').addClass('active');



        $('.result').addClass('active');

        $.ajax({

            type: 'POST',

            url: 'getQR.php',

            data: ({

                data: format,

                size: range,

                format: type,

                color: color,
                ecc: ecc

            })

        })

        .done(function(response) {

            // console.log(response);

            $('#qr_img').attr('src', "qr_images/" + response);

            $('#btn_download').attr('href', "qr_images/" + response);

            $('.result').removeClass('active');
            console.log(response);
        })

        .fail(function(data) {

            console.log('Processing File Not Found!');

        });

        console.log(color);

    }

});



// CODE QR DE Localisation

$('#location_form').submit(function(e) {

    var lat = accent($('#l_lat').val());

    var long = accent($('#l_long').val());

    if (lat != '' && long != '') {

        var range = accent($('#l_range').val());



        var type = $('.l_format:checked').val();



        var ecc = $('.l_ecc:checked').val();
        var color = $('#l_color').val().substring(1);

        var format = "geo:" + lat + "," + long + ",400";



        $('.result').addClass('active');

        $.ajax({

            type: 'POST',

            url: 'getQR.php',

            data: ({

                data: format,

                size: range,

                format: type,

                color: color,
                ecc: ecc

            })

        })

        .done(function(response) {

            // console.log(response);

            $('#qr_img').attr('src', "qr_images/" + response);

            $('#btn_download').attr('href', "qr_images/" + response);

            $('.result').removeClass('active');
            console.log(response);
        })

        .fail(function(data) {

            console.log('Processing File Not Found!');

        });

        console.log(format);

    }

});



// CODE QR DE L'ÉVÉNEMENT

function remove(str) {

    var result = str.replace(/\-/g, '');

    return result;

}

$('#event_form').submit(function(e) {

    var title = $('#title').val();

    var date1 = remove($('#e_date1').val());

    var date2 = remove($('#e_date2').val());

    var type = $('.e_format:checked').val();

    if (title != '' && date1 != '' && date2 != '') {

        var range = $('#e_range').val();

        var startNode = "BEGIN:VEVENT" + "\n";

        var endNode = "END:VEVENT";

        startNode += "SUMMARY:" + title + "\n";

        startNode += "DTSTART:" + date1 + "" + "\n";

        startNode += "DTEND:" + date2 + "" + "\n";

        startNode += endNode;



        var ecc = $('.e_ecc:checked').val();
        var color = $('#e_color').val().substring(1);



        var format = startNode;



        $('.result').addClass('active');

        $.ajax({

            type: 'POST',

            url: 'getQR.php',

            data: ({

                data: format,

                size: range,

                format: type,

                color: color,
                ecc: ecc

            })

        })

        .done(function(response) {

            // console.log(response);

            $('#qr_img').attr('src', "qr_images/" + response);

            $('#btn_download').attr('href', "qr_images/" + response);

            $('.result').removeClass('active');
            console.log(response);
        })

        .fail(function(data) {

            console.log('Processing File Not Found!');

        });

        console.log(format);

    }

});



// QR CODE DE WIFI

$('#wifi_form').submit(function(e) {

    var ssid = $('#ssid').val();

    var password = $('#password').val();

    if (ssid != '' && password != '') {

        var range = $('#w_range').val();

        var type = $('.w_format:checked').val();


        var ecc = $('.w_ecc:checked').val();
        var color = $('#w_color').val().substring(1);

        var security = $('.security:checked').val();

        var hidden = '';

        if ($('#hidden').is(':checked')) {

            hidden = "true";

        }

        var format = "WIFI:T:" + security + ";S:" + ssid + ";P:" + password + ";H:" + hidden + ";";



        $('.result').addClass('active');

        $.ajax({

            type: 'POST',

            url: 'getQR.php',

            data: ({

                data: format,

                size: range,

                format: type,

                color: color,
                ecc: ecc

            })

        })

        .done(function(response) {

            // console.log(response);

            $('#qr_img').attr('src', "qr_images/" + response);

            $('#btn_download').attr('href', "qr_images/" + response);

            $('.result').removeClass('active');
            console.log(response);
        })

        .fail(function(data) {

            console.log('Processing File Not Found!');

        });

        console.log(format);

    }

});





// QR CODE DE VCARD

$('#vcard_form').submit(function(e) {

    var firstName = $('#fname').val();

    var lastName = $('#lname').val();

    var org = $('#org').val();

    var phone = $('#phone').val();

    var fax = $('#fax').val();

    var email2 = $('#email1').val();

    var bday = $('#bday').val();

    var street = $('#street').val();

    var city = $('#city').val();

    var zip = $('#zip').val();

    var state = $('#state').val();

    var country = $('#country').val();

    var street1 = $('#street1').val();

    var city1 = $('#city1').val();

    var zip1 = $('#zip1').val();

    var state1 = $('#state1').val();

    var country1 = $('#country1').val();

    var range = $('#v_range').val();

    var type = $('.v_format:checked').val();
    var ecc = $('.v_ecc:checked').val();

    var color = $('#v_color').val().substring(1);





    var startNode = "BEGIN:VCARD" + "\n" + "VERSION:4.0" + "\n";

    var endNode = "END:VCARD";

    startNode += "N:" + accent(lastName) + ";" + accent(firstName) + "\n";

    startNode += "FN:" + accent(firstName) + " " + accent(lastName) + "\n";

    startNode += "EMAIL:" + accent(email2) + "\n";
    $('.email-plus').each(function() {

        startNode += "EMAIL:" + accent($(this).val()) + "\n";

    });




    startNode += "ADR;TYPE=Bureau:;;" + accent(street) + ";" + accent(city) + ";" + accent(state) + ";" + accent(zip) + ";" + accent(country) + "\n";

    startNode += "ADR;TYPE=Maison:;;" + accent(street1) + ";" + accent(city1) + ";" + accent(state1) + ";" + accent(zip1) + ";" + accent(country1) + "\n";





    $('.phone-plus').each(function() {

        startNode += "TEL;CELL:" + accent($(this).val()) + "\n";

    });

    startNode += "TEL;WORK;VOICE:" + accent(phone) + "\n";

    startNode += "TEL;FAX:" + accent(fax) + "\n";

    startNode += "ORG:" + accent(org) + "\n";



    $('.url-plus').each(function() {

        startNode += "URL:" + accent($(this).val()) + "\n";

    });

    startNode += "BDAY:" + accent(bday) + "\n";

    startNode += endNode;

    var format = startNode;

    $('.result').addClass('active');



    $.ajax({

        type: 'POST',

        url: 'getQR.php',

        data: ({

            data: format,

            size: range,

            format: type,

            color: color,
            ecc: ecc

        })

    })

    .done(function(response) {

        // console.log(response);

        $('#qr_img').attr('src', "qr_images/" + response);

        $('#btn_download').attr('href', "qr_images/" + response);

        $('.result').removeClass('active');
        console.log(response);
    })

    .fail(function(data) {

        console.log('Processing File Not Found!');

    });

    console.log(format);



});



$('#e_add_btn').click(function() {

    $(this).parent('div').prev().append('<div><input type="email" class="form-control email-plus mb-2" id="email" placeholder="Email Autre"></div>');

    if ($('.email-plus').length > 1) {

        $('#e_rem_btn').show();

    } else {

        $('#e_rem_btn').hide();

    }

});



$('#e_rem_btn').click(function() {

    $('.email-plus').last().remove();

    if ($('.email-plus').length > 1) {

        $('#e_rem_btn').show();

    } else {

        $('#e_rem_btn').hide();

    }

});



$('#p_add_btn').click(function() {

    $(this).parent('div').prev().append('<div><input type="text" class="form-control mb-2 phone-plus" id="mobile" placeholder="Téléphone Mobile"></div>');

    if ($('.phone-plus').length > 1) {

        $('#p_rem_btn').show();

    } else {

        $('#p_rem_btn').hide();

    }

});



$('#p_rem_btn').click(function() {

    $('.phone-plus').last().remove();

    if ($('.phone-plus').length > 1) {

        $('#p_rem_btn').show();

    } else {

        $('#p_rem_btn').hide();

    }
});