import createFlags from './createFlags.js';

const createJoke = (jokeData) => {
    // container
    const container = document.createElement('div');
    container.className = 'container';
    container.id = 'container';

    // category
    const title = document.createElement('h2');
    title.innerText = jokeData.category;
    title.id = 'title';

    // joke body
    // check type
    const type = jokeData.type;

    const body1 = document.createElement('p');
    body1.id = 'body1';
    const body2 = document.createElement('p');
    body2.id = 'body2';

    if (type === 'twopart') {
        body1.innerText = jokeData.setup;
        body2.innerText = jokeData.delivery;
    } else if (type === 'single') {
        body1.innerText = jokeData.joke;
        body2.innerText = '';
    }

    // flags
    const flagslist = createFlags(jokeData.flags);
    // flagslist.id = 'flagsList';

    container.append(title, body1, body2, flagslist);
    return container;
};

export default createJoke;
