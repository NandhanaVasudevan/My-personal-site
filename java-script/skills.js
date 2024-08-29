document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector('body');
    var scan = document.querySelectorAll('.scan, .btn');
    var btn = document.querySelector('.btn');
    var coinsSection = document.getElementById('coins-section');

    function handleClick() {
        if (body.classList.contains('is-open')) {
            body.classList.remove('is-open');
            btn.textContent = 'View';
            coinsSection.classList.add('hide');
        } else {
            body.classList.add('is-open');
            btn.textContent = 'Close';
            scan.forEach(function(scanElem) {
                scanElem.style.transform = '';
            });
            coinsSection.classList.remove('hide');
        }
    }

    function handleHover(event) {
        if (!body.classList.contains('is-open')) {
            var halfW = this.clientWidth / 2;
            var halfH = this.clientHeight / 2;

            var coorX = halfW - (event.pageX - this.offsetLeft);
            var coorY = halfH - (event.pageY - this.offsetTop);

            var degX = (coorY / halfH) * 10 + 'deg';
            var degY = (coorX / halfW) * -10 + 'deg';

            this.style.transform = 'perspective(1600px) translate3d(0, 0px, 0) scale(0.6) rotateX(' + degX + ') rotateY(' + degY + ')';
            var scanTitleWrap = this.querySelector('.scan-title-wrap');
            if (scanTitleWrap) {
                scanTitleWrap.style.transform = 'perspective(1600px) translate3d(0, 0, 200px) rotateX(' + degX + ') rotateY(' + degY + ')';
            }
        }
    }

    function handleMouseOut() {
        this.style.transform = '';
        var scanTitleWrap = this.querySelector('.scan-title-wrap');
        if (scanTitleWrap) {
            scanTitleWrap.style.transform = '';
        }
    }

    scan.forEach(function(scanElem) {
        scanElem.addEventListener('click', handleClick);
        scanElem.addEventListener('mousemove', handleHover);
        scanElem.addEventListener('mouseout', handleMouseOut);
    });
});
