export default function randomMotivation() {
    const quote = document.querySelector('.quote h3');
    const author = document.querySelector('.author h3');
    const refresh = document.querySelector('.refresh');

    const API = 'https://dummyjson.com/quotes/random';

    async function motivation() {
        quote.textContent = 'Thinking...';
        author.textContent = '';
        refresh.disabled = true;
        try {
            const api = await fetch(API);
            if (!api.ok) throw new Error(`HTTP error: ${api.status}`);
            const data = await api.json();
            getMotivation(data);
        } catch (error) {
            console.error('Failed to fetch quote:', error);
            quote.textContent = 'Something went wrong. Try again.';
            author.textContent = '';
        } finally {
            refresh.disabled = false;
        }
    }

    function getMotivation(data) {
        quote.textContent = data.quote;
        author.textContent = `- ${data.author}`;
    }
    motivation();

    refresh.addEventListener('click', (e) => {
        motivation();
    })
}