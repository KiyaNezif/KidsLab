(function () {
    const menuBtn = document.getElementById('menuBtn');
    const links = document.getElementById('navLinks');
    const icon = document.getElementById('menuIcon');

    function setMenu(open) {
        links.classList.toggle('open', open);

        menuBtn.setAttribute(
            'aria-expanded',
            String(open)
        );

        menuBtn.setAttribute(
            'aria-label',
            open ? 'Close menu' : 'Open menu'
        );

        icon.firstElementChild.setAttribute(
            'href',
            open ? '#i-close' : '#i-menu'
        );
    }

    menuBtn.addEventListener('click', function () {
        setMenu(!links.classList.contains('open'));
    });

    links.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
            setMenu(false);
        }
    });


    // Registration form

    const form = document.getElementById('signForm');
    const joinBtn = document.getElementById('joinBtn');
    const note = document.getElementById('formNote');

    document.querySelectorAll('.js-join').forEach(function (a) {

        a.addEventListener('click', function (e) {
            e.preventDefault();

            setMenu(false);

            form.hidden = false;

            joinBtn.setAttribute(
                'aria-expanded',
                'true'
            );

            document.getElementById('join').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            setTimeout(function () {
                document.getElementById('f-parent').focus({
                    preventScroll: true
                });
            }, 350);
        });

    });    

})();