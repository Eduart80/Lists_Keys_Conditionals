import React from 'react';
import type { TaskStatus, TaskFilterProps } from '../../types';

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    return(
        <>
        <label>Filter Tasks:</label>
        <select onChange={(e) => {
            const value = e.target.value;
            onFilterChange({
                status: value === 'All' ? undefined : value as TaskStatus
            });
        }}>
        <option value='All'>All</option>
        <option value='pending'>pending</option>
        <option value='in-progress'>In Progress</option>
        <option value='completed'>Completed</option>
        </select>
        </>
    )
}
 

