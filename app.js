const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const button = document.querySelector('button');


async function getDadJoke() {
    try {
        const url = 'https://icanhazdadjoke.com/';
        const config = { headers: { Accept: 'application/json' } };

        const result = await axios.get(url, config);
        const joke = result.data.joke;

        return joke;

    } catch (e) {
        console.log(e);
    }
}

function randomNumber() {
    const number = Math.floor(Math.random() * 999);
    return number;
}

function populate(joke, number) {
    quote.textContent = joke;
    adviceId.textContent = number;
}

button.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        populate(await getDadJoke(), randomNumber());
    } catch (error) {
        console.log(error);
    }
})