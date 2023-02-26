import React, { useState } from 'react'
import './board.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import seedData from '../../seedData'
import Tasks from './tasks'



export const Board = () => {
    const [data, setData] = useState(seedData)

    const onDragEnd = result => {
        // Check if there is a destination for the dragged item
        // If not, return value is unchanged
        if (!result.destination) return;

        // Get source and destination information
        const { source, destination } = result;

        // Checks and compares if the source is being changed
        if (source.droppableId !== destination.droppableId) {
            // Find the indices of the source and destination columns in the data array
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId);

            // Get the source and destination columns from the data array
            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            // Create new arrays for the tasks in the source and destination columns
            const sourceTasks = [...sourceCol.tasks];
            const destinationTasks = [...destinationCol.tasks];

            // Remove the dragged item from the source column
            const [removed] = sourceTasks.splice(source.index, 1);

            // Insert the removed item into the destination column at the appropriate index
            destinationTasks.splice(destination.index, 0, removed);

            // Update the data array with the new tasks arrays for the source and destination columns
            setData(prevData => {
                const newData = [...prevData];
                newData[sourceColIndex].tasks = sourceTasks;
                newData[destinationColIndex].tasks = destinationTasks;
                return newData;
            });
        }
    };

    // Render the board and its sections with tasks
    // Set the DragDropContext component to call onDragEnd function when drag and drop is finished

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">

                {/* Map through the data to generate a Droppable section for each data object */}
                {data.map(section => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div className="section" {...provided.droppableProps} ref={provided.innerRef}>

                                 {/* Displays the title */}
                                <div className="title"> {section.title} </div>
                                <div className="tasks">

                                {/* Map through the tasks array and generate a Draggable component for each task */}
                                    {section.tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                      {/* Render the task title */}
                                                    <Tasks>{task.title}</Tasks>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {/* Render the provided placeholder */}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
}