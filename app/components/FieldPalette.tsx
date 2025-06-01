import React from 'react';
import { FieldType } from '~/store/useFormStore';

const fieldTypes: FieldType[] = ['text', 'textarea', 'dropdown', 'checkbox', 'date'];

interface DraggableFieldProps {
  type: FieldType;
  onDragStart: (type: FieldType) => void;
}

function DraggableField({ type, onDragStart }: DraggableFieldProps) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(type)}
      className="p-2 my-1 border rounded cursor-move hover:bg-gray-100"
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
}

export function FieldPalette() {
  function handleDragStart(event: React.DragEvent<HTMLDivElement>, type: FieldType) {
    event.dataTransfer.setData('field/type', type);
  }

  return (
    <div className="p-4 border rounded w-48">
      <h2 className="font-bold mb-2">Field Types</h2>
      {fieldTypes.map((type) => (
        <div
          key={type}
          draggable
          onDragStart={(e) => handleDragStart(e, type)}
          className="p-2 my-1 border rounded cursor-move hover:bg-gray-200 bg-gray-800 text-white "
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      ))}
    </div>
  );
}
