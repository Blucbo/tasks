import {ImprovedFighter} from "./improvedfighter";

export interface IFighter {
    readonly name: string;
    readonly power: number;
    health: number;

    setDamage(damage: number): void;
    hit(enemy, point: number): void;
    knockout(): Promise<Fighter | ImprovedFighter>;
}

export class Fighter implements IFighter {
    constructor(readonly name,
                readonly power,
                public health) {}

    setDamage(damage: number): void {
        this.health -= damage;
        console.log(`health ${this.name}: ${this.health}`);
    }

    hit(enemy: Fighter | ImprovedFighter, point: number): void {
        enemy.setDamage(this.power * point);
    }

    async knockout(): Promise<Fighter | ImprovedFighter> {
        return new Promise<Fighter | ImprovedFighter>(resolve => {
            setTimeout(() => {
                console.log("Time is over");
                resolve(this);
            }, 500);
        });
    }
}
