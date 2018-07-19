import {Fighter} from "./fighter";
/**
 * Created by Bogdan on 19.07.2018.
 */
export class ImprovedFighter extends Fighter {
    doubleHit(enemy: Fighter | ImprovedFighter, point: number): void {
        super.hit(enemy, point * 2);
    }
}
