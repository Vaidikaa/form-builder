import React from 'react';
import { useFormStore, FormField, FieldType } from '~/store/useFormStore';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { v4 as uuidv4 } from 'uuid';

interface SortableItemProps {
  field: FormField;
   onClick?: (id: string) => void;
}

function SortableItem({ field ,onClick }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
        onClick={() => onClick?.(field.id)}
      className="p-3 my-2 border rounded bg-gray-800 cursor-move"
    >
      <strong>{field.label || field.type}</strong> — <small>{field.type}</small>
    </div>
  );
}

interface FormCanvasProps {
  onFieldDrop?: (type: FieldType) => void;
  onFieldClick?: (id: string) => void;
}

export function FormCanvas({ onFieldDrop , onFieldClick }: FormCanvasProps) {
  const fields = useFormStore((state) => state.fields);
  const reorderFields = useFormStore((state) => state.reorderFields);
  const addField = useFormStore((state) => state.addField);

  const sensors = useSensors(useSensor(PointerSensor));

  // Handle sorting reorder
  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id);
      const newIndex = fields.findIndex((f) => f.id === over.id);
      reorderFields(oldIndex, newIndex);
    }
  }

  // Handle external drop (new field added)
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const fieldType = event.dataTransfer.getData('field/type') as FieldType;
    if (fieldType) {
      const newField: FormField = {
        id: uuidv4(),
        type: fieldType,
        label: '',
        required: false,
      };
      addField(newField);
     onFieldDrop?.(fieldType);
    }
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="p-6 bg-gray-800 text-white shadow-xl rounded-lg space-y-4 w-full flex flex-col items-center"
    >
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
          {fields.length === 0 && <p className="text-gray-500">Drag fields here to add</p>}
          {fields.map((field) => (
            <SortableItem key={field.id} field={field} onClick={onFieldClick}/>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
