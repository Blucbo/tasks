import {ImprovedFighter} from "./fight/improvedfighter";
import {Fighter} from "./fight/fighter";
import fight from "./fight/fight";

export default class Main {
    constructor() {
        // create two instances
        const simpleHero = new Fighter("Moto", 10, 1000);
        const impHero = new ImprovedFighter("Vivo", 8, 200);

        // call fight function first Fighter
        // draw
        fight(simpleHero, impHero, 1, 2, 5, 8, 1);

        // call fight function first ImprovedFighter
        // winnner and lost
        // fight(impHero, simpleHero, 1, 2, 5, 8, 1, 40);
    }
}

const start = new Main();