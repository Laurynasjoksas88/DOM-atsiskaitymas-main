let skaicius = 0;

function keistiSkaiciu(pasikeitimas, mygtukoId) {
    skaicius += pasikeitimas;
    atnaujintiParagrafa();
    patikrinkLyginuma(mygtukoId);
}

function atnaujintiParagrafa() {
    let p = document.getElementById('p');
    p.innerHTML = + skaicius;
}

function patikrinkLyginuma(mygtukoId) {
    let mygtukas = document.getElementById(mygtukoId);

    if (skaicius % 2 === 0) {
        mygtukas.style.backgroundColor = 'red';
    } else {
        mygtukas.style.backgroundColor = '';
    }
}

