import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {changeUpdatedAt, clear, decrease, increase} from "./counter";
import {map} from "rxjs";


@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {
    }

    updatedAt$ = createEffect(() => this.actions$.pipe(
        ofType(increase, decrease, clear),
        map(() => changeUpdatedAt({ updatedAt: Date.now()}))
    ))
    // Когда action придет и мы его никак не обработаем, мы вернем то же action. Чтобы не получать
    // зацикливание мы пишем { dispatch: false } инчае можно получить бесконечный цикл
}