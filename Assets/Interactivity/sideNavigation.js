export default function gridNavigation() {
    const fullCards = document.querySelectorAll('.full-cards');
    const sideNav = document.querySelector('.grid-nav');
    const navItems = sideNav.children;
    const navArray = Array.from(navItems);

    sideNav.addEventListener('click', (event) => {
        const target = event.target;

        const iconIndex = navArray.indexOf(target);
        if(iconIndex === -1) return;
        const fullCardArr = Array.from(fullCards);
        const clickedCard = fullCardArr[iconIndex];

        const isOpen = clickedCard.style.display === 'block';

        fullCards.forEach((card) => {
            card.style.display = 'none';
        })

        navArray.forEach((item) => {
            item.classList.remove('active');
            item.setAttribute('style', 'color: none');
        })

        if(clickedCard && !isOpen) {
            clickedCard.style.display="block";
            target.classList.add('active');
            target.setAttribute('style', 'color: skyblue');
        }
    })
}