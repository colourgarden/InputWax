InputWax
=
InputWax enables bigger click areas for form inputs, such as radio buttons and checkboxes.

Usage
-

By default, the plugin looks for a 'data-inputwax' attribute on the input and a 'waxer' class on a parent element which will set the clickable area. You may wish to change the parent class to match your existing markup.

The code below will instantiate InputWax, but if you don't need to change the classes then it will autorun.

    $('[data-inputwax]'].inputWax({
        waxer: '.waxer',
        waxerActiveClass: 'active'
    });