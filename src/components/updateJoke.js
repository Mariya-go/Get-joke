import createFlags from './createFlags.js';

const updateJoke = (jokeData) => {
    const container = document.getElementById('container');

    const title = document.getElementById('title');
    title.innerText = jokeData.category;

    // check type
    const type = jokeData.type;
    const body1 = document.getElementById('body1');
    const body2 = document.getElementById('body2');

    if (type === 'single') {
        body1.innerText = jokeData.joke;
        body2.innerText = '';
    } else if (type === 'twopart') {
        body1.innerText = jokeData.setup;
        body2.innerText = jokeData.delivery;
    }

    const oldFlafsList = document.getElementById('list');
    const newFlagsList = createFlags(jokeData.flags);
    oldFlafsList.replaceWith(newFlagsList);
};

export default updateJoke;
