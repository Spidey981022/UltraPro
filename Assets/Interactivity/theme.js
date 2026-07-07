export default function getTheme() {
    const body = document.querySelector('body');
    const icon = body.querySelector('.ri-sun-line, .ri-moon-clear-line');

    const checkTheme = JSON.parse(localStorage.getItem('theme'));
    renderTheme(checkTheme);

    icon.addEventListener('click', () => {
       const isDark = body.classList.toggle('dark');
       localStorage.setItem('theme', JSON.stringify(isDark));
       renderTheme(isDark);
    });

    function renderTheme(isDark) {
        if (isDark) {
            body.classList.add('dark');
            icon.classList.add('ri-moon-clear-line');
            icon.classList.remove('ri-sun-line');
        }
        else{
            body.classList.remove('dark');
            icon.classList.remove('ri-moon-clear-line');
            icon.classList.add('ri-sun-line');
        }
    }
}
