import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedfighter";
export interface resultFight {
    winner:  Fighter | ImprovedFighter,
    loser:  Fighter | ImprovedFighter,
    countHits: number
}

export default async function fight(firstHero: Fighter | ImprovedFighter, secondHero: Fighter | ImprovedFighter, ...points: Array<number>): Promise<void> {
    // values for result
    const resultFight: resultFight = {
        winner: null,
        loser: null,
        countHits: 0
    };

    for (let i = 0; i < points.length; i++) {
        hit(firstHero, secondHero, points[i]);
        if (secondHero.health <= 0) {
            console.log(`User ${secondHero.name} in knockout`);
            // save data for result
            resultFight.loser = await secondHero.knockout();
            resultFight.winner = firstHero;
            resultFight.countHits = ++i;
            break;
        }

        hit(secondHero, firstHero, points[i]);
        if (firstHero.health <= 0) {
            console.log(`User ${firstHero.name} in knockout`);
            // save data for result
            resultFight.loser = await firstHero.knockout();
            resultFight.winner = secondHero;
            resultFight.countHits = ++i;
            break;
        }
    }

    showResult(resultFight);
}

function showResult(result: resultFight): void {
    if (result.winner) {
        console.log(`
        Result of battle
        After ${result.countHits} hits ${result.loser.name} dead x_x
        Congratulations ${result.winner.name} with ${
            result.winner.health
            } health
        `);
    } else {
        console.log("The result of the battle is a draw");
    }
}

function hit(currentHero: Fighter | ImprovedFighter, enemyHero: Fighter | ImprovedFighter, point = 1) {
    if (currentHero instanceof ImprovedFighter) {
        currentHero.doubleHit(enemyHero, point);
    } else {
        currentHero.hit(enemyHero, point);
    }
}
