
/*!
 * jQuery InputWax plugin
 * Author: @colourgarden
 */

;(function ( $, window, document, undefined ) {

    $.fn.inputWax = function ( options ) {

        options = $.extend( {}, $.fn.inputWax.options, options );

        function doWax(el, waxer){

            el.attr('checked', 'checked');
            $( $.fn.inputWax.options.waxer ).removeClass('active');
            waxer.addClass($.fn.inputWax.options.waxerActiveClass);

        }

        return this.each(function () {

            var el = $(this),
                waxer = el.closest($.fn.inputWax.options.waxer);

            if(!waxer.length){
                // No parent element
                return;
            }

            $.each(waxer, function(){

                $(this).click(function(){

                    doWax(el, waxer);

                });

            });

        });
    };

    $.fn.inputWax.options = {

        selector: 'data-inputwax',
        waxer: '.waxer',
        waxerActiveClass: 'active'
    };

    $(document).ready(function() {
        $('[ ' + $.fn.inputWax.options.selector + ']').inputWax();
    });

})( jQuery, window, document );
