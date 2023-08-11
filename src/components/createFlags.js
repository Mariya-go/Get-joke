const createFlags = (flagsObj) => {
    const list = document.createElement('ul');
    list.id = 'list';
    for (const [key, value] of Object.entries(flagsObj)) {
        const liEl = document.createElement('li');
        liEl.innerHTML = key;
        if (value === true) {
            liEl.className = 'red';
        } else {
            liEl.className = 'green';
        }
        list.append(liEl);
    }
    return list;
};

export default createFlags;
