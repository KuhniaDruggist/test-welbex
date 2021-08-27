import {v1} from 'uuid';

const FILTER_NAME = 'FILTER_NAME';
const FILTER_AMOUNT = 'FILTER_AMOUNT';
const FILTER_DISTANCE = 'FILTER_DISTANCE';

export type ActionTypes = ReturnType<typeof filterNameAC> | ReturnType<typeof filterAmountAC> | ReturnType<typeof filterDistanceAC>

export type RootStoreType = {
    _state: StateType[]
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType[]
    dispatch: (action: ActionTypes) => void
}
export type StateType = {
    id: string
    date: number
    name: string
    amount: number
    distance: number
}

export const store: RootStoreType = {
    _state: [
        {id: v1(), date: 1629174621288, name: 'Коррадо', amount: 85, distance: 778},
        {id: v1(), date: 1629164621288, name: 'Арзуман', amount: 22, distance: 5000},
        {id: v1(), date: 1629117621288, name: 'Дарий', amount: 84, distance: 797},
        {id: v1(), date: 1629114721288, name: 'Велимир', amount: 44, distance: 2312},
        {id: v1(), date: 1629111621288, name: 'Валентина', amount: 87, distance: 77978},
        {id: v1(), date: 1628114821288, name: 'Григорий', amount: 80, distance: 798},
        {id: v1(), date: 1628114621288, name: 'Антонин', amount: 22, distance: 5000},
        {id: v1(), date: 1627714621288, name: 'Илона', amount: 42, distance: 12122},
        {id: v1(), date: 1627174621288, name: 'Ирина', amount: 85, distance: 79968},
        {id: v1(), date: 1626110621288, name: 'Инна', amount: 44, distance: 12},
        {id: v1(), date: 1626104621288, name: 'Джоан', amount: 78, distance: 78},
        {id: v1(), date: 1625214621288, name: 'Наталья', amount: 2, distance: 10},
        {id: v1(), date: 1625154621287, name: 'Стас', amount: 21, distance: 5},
        {id: v1(), date: 1625114631288, name: 'Алла', amount: 20, distance: 550},
        {id: v1(), date: 1624184621288, name: 'Борис', amount: 87, distance: 77},
        {id: v1(), date: 1624114521288, name: 'Леля', amount: 20, distance: 530},
        {id: v1(), date: 1624114221288, name: 'Евдокия', amount: 43, distance: 1212},
        {id: v1(), date: 1624114121288, name: 'Викторин', amount: 34, distance: 112},
        {id: v1(), date: 1624114021288, name: 'Анжелика', amount: 12, distance: 50},
        {id: v1(), date: 1622194621288, name: 'Аннерс', amount: 82, distance: 783},
        {id: v1(), date: 1622124621288, name: 'Бронислав', amount: 77, distance: 978},
        {id: v1(), date: 1622114621288, name: 'Иларий', amount: 49, distance: 12},
        {id: v1(), date: 1621118621288, name: 'Алексей', amount: 4, distance: 1312},
        {id: v1(), date: 1621117621288, name: 'Глеб', amount: 87, distance: 797},
        {id: v1(), date: 1621114921288, name: 'Лукия', amount: 7, distance: 328},
        {id: v1(), date: 1621112621288, name: 'Марианна', amount: 80, distance: 7258},
        {id: v1(), date: 1620914621288, name: 'Вахтанг', amount: 4, distance: 1222},
        {id: v1(), date: 1620119621288, name: 'Маргарет', amount: 88, distance: 79558},
        {id: v1(), date: 1620114621288, name: 'Женевьева', amount: 97, distance: 7148},
        {id: v1(), date: 1620014621288, name: 'Агнес', amount: 22, distance: 5000},
    ],
    _subscriber() {
        console.log('no subscribers (observers)');
    },
    subscribe(observer: () => void) {
        this._subscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        debugger
        if (action.type === FILTER_NAME) {
            let newRow = this.getState();
            action.flag
                ? newRow.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)
                : newRow.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)
                    .reverse();
            this._state = newRow
            this._subscriber();
        }
        else if (action.type === FILTER_AMOUNT) {
            let newRow = this.getState();
            action.flag
                ? newRow.sort((a, b) => a.amount - b.amount)
                : newRow.sort((a, b) => a.amount - b.amount)
                    .reverse();
            this._state = newRow
            this._subscriber();
        }
        else if (action.type === FILTER_DISTANCE) {
            let newRow = this.getState();
            action.flag
                ? newRow.sort((a, b) => a.distance - b.distance)
                : newRow.sort((a, b) => a.distance - b.distance)
                    .reverse();
            this._state = newRow
            this._subscriber();
        }
    }
}

export const filterNameAC = (flag: boolean) => ({type: FILTER_NAME, flag} as const);
export const filterAmountAC = (flag: boolean) => ({type: FILTER_AMOUNT, flag} as const);
export const filterDistanceAC = (flag: boolean) => ({type: FILTER_DISTANCE, flag} as const);

