const MAX_LEN = 5;

export function generate() {
    let randomString = '';
    const subset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < MAX_LEN; i++) {
        randomString += subset.charAt(Math.floor(Math.random() * subset.length));
    }

    return randomString;
}