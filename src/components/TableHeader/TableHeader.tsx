import React, {useState} from 'react';
import {ActionTypes, filterAmountAC, filterDistanceAC, filterNameAC} from '../../data/store';
import styles from './TableHeader.module.css'

type TableHeaderPropsType = {
    dispatch: (action: ActionTypes) => void
}

export const TableHeader: React.FC<TableHeaderPropsType> = ({dispatch}) => {
    const [nameFlag, setNameFlag] = useState<boolean>(true);
    const [amountFlag, setAmountFlag] = useState<boolean>(true);
    const [distanceFlag, setDistanceFlag] = useState<boolean>(true);

    const onClickNameHandler = () => {
        dispatch(filterNameAC(nameFlag));
        setNameFlag(!nameFlag);
    }

    const onClickAmountHandler = () => {
        dispatch(filterAmountAC(amountFlag));
        setAmountFlag(!amountFlag);
    }

    const onClickDistanceHandler = () => {
        dispatch(filterDistanceAC(distanceFlag));
        setDistanceFlag(!distanceFlag);
    }

    return (
        <thead>
        <tr className={styles.headerRow}>
            <td className={styles.headerColumn}>Дата</td>
            <td className={styles.headerColumn}>Название<button onClick={onClickNameHandler}>sort</button></td>
            <td className={styles.headerColumn}>Количество<button onClick={onClickAmountHandler}>sort</button></td>
            <td className={styles.headerColumn}>Расстояние<button onClick={onClickDistanceHandler}>sort</button></td>
        </tr>
        </thead>
    );
}