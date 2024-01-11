import React from 'react';
import { PuzzleBlock } from './puzzle-block';

type LevelGridProps = {
    width: number;
    height: number;
}

export const LevelGrid = (props: LevelGridProps) => {
    const { width, height } = props;

    const renderTable = () => {
        const tableRows = [];
        let count = 0;
        for (let i = 0; i < height; i++) {
            const tableColumns = [];
            for (let j = 0; j < width; j++) {
                tableColumns.push(<PuzzleBlock key={`${j}-${i}`} x={j} y={i} />);
            }
            tableRows.push(<tr key={i}>{tableColumns}</tr>);
        }
        return tableRows;
    };

    return (
        <table className={`w-${width} h-${height} table text-center`}>
            <tbody>
                {renderTable()}
            </tbody>
        </table>
    );
}