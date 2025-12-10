import React from 'react';
import type { TaskStatus, TaskFilterProps } from '../../types';


export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    return(
    <div className="form-group">
        <div className="row">
            <div className='w-25'>
                <label htmlFor="prioritySelect">Status</label>
           
                <select
                id="prioritySelect" 
                className="form-control"
                onChange={(e) => {
                    const value = e.target.value;
                    onFilterChange({
                        status: value === 'all status' ? undefined : value as TaskStatus
                    });
                }}>
                <option value='all status'>All Status</option>
                <option value='pending'>Pending</option>
                <option value='in-progress'>In Progress</option>
                <option value='completed'>Completed</option>
                </select>
               
            </div>
            <div className='w-25'>
                <label htmlFor="prioritySelect">Priotity</label>
                <select 
                 id="prioritySelect" 
                className="form-control"
                onChange={(e) => {
                    const value = e.target.value;
                    onFilterChange({
                        priority: value === 'all priorities' ? undefined : value as 'low' | 'medium' | 'high',
                    });
                }}>
                <option value='all priorities'>All Priorities</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
                </select>
            </div>
        </div>
    </div>
    )
}
 

