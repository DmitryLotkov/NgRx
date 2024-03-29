import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {select, Store} from "@ngrx/store";


import {map, Observable} from "rxjs";
import {countSelector, updatedAtSelector} from "./state/counter/count.selectors";
import {AsyncPipe, DatePipe} from "@angular/common";
import {clear, CountState, decrease, increase} from "./state/counter/counter";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe, DatePipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'ngrx';
    count$: Observable<number> = this.store.select(countSelector);
    updatedAt$: Observable<number | undefined> = this.store.select(updatedAtSelector);
    cannotDecrease$ = this.count$.pipe(map(count => count <=0))
    constructor(private store: Store<CountState>) {
    }

    increase() {
        this.store.dispatch(increase())
    }

    clear() {
        this.store.dispatch(clear())
    }

    decrease() {
        this.store.dispatch(decrease())
    }
}
