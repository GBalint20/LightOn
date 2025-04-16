import Jatekter from "../Jatekter.js";
import Lampa from "../Lampa.js";

const teszt1 = [

{
    id: 0,
    vart: [false, false, false, true, false, false, false, false]
},
{
    id: 1,
    vart: []
},
{
    id: 2,
    vart: []
}
{
    id: 3,
    vart: []
},
{
    id: 4,
    vart: []
}
{
    id: 5,
    vart: []
},
{
    id: 6,
    vart: []
}
{
    id: 7,
    vart: []
},
{
    id: 8,
    vart: []
},

];

function tesztEg() {

    const szuloelem = document.createElement("div");
    const Jatekter = new Jatekter(szuloelem);
    let allapotok = Jatekter.getAllapot();

    window.dispatchEvent("kattint", {detail: 5});




}
