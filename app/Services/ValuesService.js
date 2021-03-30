import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  subtractMoney(WhichSnack) {
    if (ProxyState.money >= ProxyState.snacks[WhichSnack].cost) {
      ProxyState.money -= ProxyState.snacks[WhichSnack].cost
      ProxyState.snacks[WhichSnack].total += 1
      ProxyState.lastSnack = `${ProxyState.snacks[WhichSnack].name} x${ProxyState.snacks[WhichSnack].total}`
    }

  }
  addMoney() {
    ProxyState.money += 0.25
  }
}

export const valuesService = new ValuesService();

