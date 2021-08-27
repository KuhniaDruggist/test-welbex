import React, {useState} from 'react';
import {ActionTypes, StateType} from './data/store';
import './App.css';
import {TableBody} from './components/TableBody/TableBody';
import {TableHeader} from './components/TableHeader/TableHeader';
import {Pagination} from './components/Pagination/Pagination';

type AppPropsType = {
    state: StateType[]
    dispatch: (action: ActionTypes) => void
}

export const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowPerPage] = useState<number>(5);

    //Get current row
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRow = state.slice(indexOfFirstRow, indexOfLastRow);

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <table className='Table'>
                <TableHeader dispatch={dispatch}/>
                <TableBody state={currentRow}/>
            </table>
            <Pagination rowPerPage={rowPerPage}
                        totalRow={state.length}
                        currentPage={currentPage}
                        paginate={paginate}/>
        </div>
    );
}

export default App;

