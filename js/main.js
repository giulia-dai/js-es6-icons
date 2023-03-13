// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


//Array di oggetti

function stampa(el, html) {
    const { family, prefix, name, color } = el;

    html.innerHTML += `
        <div class="${family}">
            <i class="${prefix}${name}" style="color:${color}"></i>
            <h4>${name}</h4>
        </div>
    `;
}
const family = 'icon', prefix = 'fa-solid fa-';
let icons = [
    {
        family,
        prefix,
        type: 'animals',
        name: 'cat'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'crow'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'dog'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'dove'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'dragon'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'horse'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'hippo'
    },
    {
        family,
        prefix,
        type: 'animals',
        name: 'fish'
    },
    {
        family,
        prefix,
        type: 'vegetables',
        name: 'carrot'
    },
    {
        family,
        prefix,
        type: 'vegetables',
        name: 'apple-whole'
    },
    {
        family,
        prefix,
        type: 'vegetables',
        name: 'lemon'
    },
    {
        family,
        prefix,
        type: 'vegetables',
        name: 'pepper-hot'
    },
    {
        family,
        prefix,
        type: 'user',
        name: 'user-astronaut'
    },
    {
        family,
        prefix,
        type: 'user',
        name: 'user-graduate'
    },
    {
        family,
        prefix,
        type: 'user',
        name: 'user-ninja'
    },
    {
        family,
        prefix,
        type: 'user',
        name: 'user-secret'
    }
];
const main = document.querySelector('main');
const select = document.querySelector('nav select');
const colors = ['blue', 'orange', 'purple'];
const types = [];

// stampare su html da js 
icons.forEach((el) => {
    if (!types.includes(el.type)) {
        types.push(el.type);
        select.innerHTML += `
            <option value="${el.type}">${el.type}</option>
        `;
    }
});
console.log(types);


// aggiungere il colore
icons = icons.map((el) => {
    let colorIcon = types.indexOf(el.type);
    return { ...el, color: colors[colorIcon] };
});




icons.forEach((el) => stampa(el, main));




filter.onchange = function () {
    const val = this.value;
    main.innerHTML = '';

    icons.forEach((el) => {
        if (val === 'all' || val === el.type)
            stampa(el, main);
    });
};

