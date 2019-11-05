import{ header,nav, main, footer } from "./components";
import * as state from "./store";
import Navigo from "Navigo";


const router = new Navigo (location.origin)

function render (st=state.Main){

    document.querySelector("#root").innerHTML=`
    ${header(st)}
    ${main()}
    ${nav(st)}
    ${footer()}
    `;
router.updatePageLinks();

}


router.on({
    'Menu': () => render (state['Menu'].main),
    'wingselections': () => render (state['wingselections'].main),
    'FindHotwingSpotNearYou': ()=> render (state['top6stlwingspots'].main),
    
})
