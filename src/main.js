const quotes = [
    "A különbség csupán annyi egy szent és egy vétkes között, hogy a szenteknek múltjuk, a vétkeseknek jövőjük van.",
    "Szeretem a színjátszást. Sokkal valószínűbb, mint az élet.",
    "Ha valaki szeret valakit, mindig azzal kezdi, hogy önmagát csalja meg, s azzal végzi, hogy másokat csal meg.",
    "Minden nagyszerű dolog mögött van valami tragikus.",
    "A fiatalemberek hűek akarnának lenni, de nem tudnak, az öregemberek hűtlenek akarnának lenni, de nem tudnak.",
    "Manapság mindent túl lehet élni - kivéve a halált.",
    "A művészet ott kezdődik, ahol a másolás véget ér.",
    "Minden dolgot mértékkel, még a mértéket is mértékkel.",
    "Ki-ki a saját életének ördöge, és csinál belőle poklot.",
    "Minden kép, melyet érzéssel festettek, a festő arcképe, nem a modellé.",
    "Mindenki a sarat tapossa, csak van, aki közben a csillagokra néz.",
    "Az ábrándozás a gazdag ember privilégiuma, nem állásnélkülieknek való foglalkozás.",
    "A sírás az egyszerű nőknek való. A csinos nők elmennek vásárolni.",
    "Bárminek ellen tudok állni, csak a kísértésnek nem.",
    "Éveket élhetsz anélkül, hogy igazán élnél, aztán egyszer csak az egész élet belesűrűsödik egyetlen órába.",
    "Soha nem halasztom holnapra, amit holnaputánra is halaszthatok.",
    "A világ színpad ugyan, de a darabnak rossz a szereposztása.",
    "Egy csomó olyan dolog van, amit eldobhatnánk, ha nem félnénk attól, hogy valaki felveszi őket.",
    "Ma az emberek tudják mindennek az árát, de nem tudják semminek az értékét.",
    "Ha az emberek egyetértenek velem, mindig az az érzésem, hogy valami rosszat mondtam."
];

const randomQuote = () => {
    const message = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(message);
}

module.exports = {randomQuote};