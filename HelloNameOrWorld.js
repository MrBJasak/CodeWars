function hello(name) {
    const text = `Hello, `;
    name = [...name];
    console.log(name);
    if (name.length > 0) {
        name.map((item, index) => {
            item.toLowerCase();
        });
        console.log(name);
        let a = name[0].toUpperCase();
        name.shift();
        name.unshift(a);
        name = name.join('');
        console.log(name);
        console.log(`${text}${name}!`);
        return `${text}${name}!`;
    } else {
        console.log(`${text}World!`);
        return `${text}World!`;
    }
}

hello('alice');
hello('DonNA');

// Not done
