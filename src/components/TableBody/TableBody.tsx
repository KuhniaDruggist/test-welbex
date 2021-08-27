import React from 'react';
import styles from './TableBody.module.css'
import {StateType} from '../../data/store';

type TableBodyPropsType = {
    state: StateType[]
}
export const TableBody: React.FC<TableBodyPropsType> = ({state}) => {
    return (
        <tbody>
        {state.map(r => {
            const date = new Date(r.date);

            return <tr key={r.id} className={styles.row}>
                <td className={styles.column}>{`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}</td>
                <td className={styles.column}>{r.name}</td>
                <td className={styles.column}>{r.amount}</td>
                <td className={styles.column}>{r.distance}</td>
            </tr>
        })}
        </tbody>
    );
}