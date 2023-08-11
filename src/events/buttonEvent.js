import buttonHandler from '../handlers/buttonHandler.js';
import dom from '../dom.js';

const buttonEvent = () => {
    dom.button.addEventListener('click', buttonHandler);
};

export default buttonEvent;
