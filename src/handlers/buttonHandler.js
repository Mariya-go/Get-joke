import dom from '../dom.js';
import getJokes from '../../apis/getJokes.js';
import createJoke from '../components/createJoke.js';
import updateJoke from '../components/updateJoke.js';

const buttonHandler = async () => {
    // get joke data
    const jokeData = await getJokes();

    // check if joke exist
    const containerExist = document.getElementById('container');
    if (!containerExist) {
        const newJoke = createJoke(jokeData);
        dom.root.append(newJoke);
    } else {
        const updatedJoke = updateJoke(jokeData);
    }
};

export default buttonHandler;
