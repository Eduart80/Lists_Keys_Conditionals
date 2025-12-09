import React from 'react'
import type { TaskListProps, TaskStatus } from '../../types'

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete
}) => {
    const statuses: TaskStatus[] = ['pending', 'in-progress', 'completed']

    return (
        <>
            {tasks.map((object) => (
                <div key={object.id}>
                    <p>{object.title}</p>
                    <select
                        defaultValue={object.status} 
                        onChange={(e) => onStatusChange && onStatusChange(object.id, e.target.value as TaskStatus)} 
                    >
                        {statuses.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => onDelete(object.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}
