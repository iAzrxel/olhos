document.addEventListener('mousemove', (e) => {
    const lel = document.querySelector('.olhos');
    const olhos = document.querySelectorAll('.olhos > div');

    if (!lel || olhos.length !== 2) return;

    const jaj = lel.getBoundingClientRect();
    const jojX = jaj.left + jaj.width / 2;
    const jojY = jaj.top + jaj.height / 2;

    const angulo = Math.atan2(e.clientY - jojY, e.clientX - jojX);
    const distancia = Math.min(
        olhos[0].offsetWidth / 4,
        Math.sqrt(Math.pow(e.clientX - jojX, 2) + Math.pow(e.clientY - jojY, 2))
    );

    const moveX = Math.cos(angulo) * distancia;
    const moveY = Math.sin(angulo) * distancia;

    olhos.forEach(olho => {
        const bolinha = olho.querySelector('i');
        if (bolinha) {
            bolinha.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});
