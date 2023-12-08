'use strict';
(function main() {
    if (!(typeof window === 'object' && window.top === window.self)) {
        console.warn('[window]:failed');
        return;
    }
    window.addEventListener(
        'load',
        () => {
            const size = 8;
            try {
                const oct = document.getElementById('oct');
                const prg = document.getElementById('prg');
                if (!(oct && prg && oct.childElementCount === size)) {
                    throw new Error('elements: failed');
                }
                const A = Array(size).fill('0');
                oct.addEventListener(
                    'mouseup',
                    (e) => {
                        if (!(e.target instanceof HTMLLIElement && e.target.dataset.pos)) {
                            console.warn('[li.event]:failed');
                            return;
                        }
                        A[(size - 1) - (+(e.target.dataset.pos))] = `${Number(e.target.classList.toggle('act'))}`;
                        prg.textContent = `${parseInt(A.join(''), 2)}`;
                    },
                    false
                );
            } catch (err) {
                console.error(err.message);
            }
        },
        {
            once: true
        }
    );
})();
