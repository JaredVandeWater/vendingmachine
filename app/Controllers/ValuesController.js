import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  let money = ProxyState.money;
  document.getElementById('cash').innerHTML = `${money.toFixed(2)}`

}
function _drawPurchase() {

  document.getElementById('add-inventory').innerHTML += `<div class="row">
            <div class="col d-flex justify-content-center">
                <h3 id="my-food">${ProxyState.lastSnack}</h3>
            </div>
        </div>`

}


//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("money", _draw);
    _draw()
  }

  addMoney() {
    valuesService.addMoney()
  }

  subtractMoney(whichSnack) {

    valuesService.subtractMoney(whichSnack)
    if (ProxyState.lastSnack !== '') {
      _drawPurchase()
      ProxyState.lastSnack = ''
    }

  }


}
