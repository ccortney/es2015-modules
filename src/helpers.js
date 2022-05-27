
const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length)
    return items[idx]
}

const remove = (items, item) => {
    for (let i=0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i, 1);
            return item;
        }
    }
}

export {choice, remove};