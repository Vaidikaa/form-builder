import React from 'react';
import { useFormStore, FormField } from '~/store/useFormStore';

interface FieldEditorProps {
  selectedFieldId?: string | null;
  onClose?: () => void;
}

export function FieldEditor({ selectedFieldId, onClose }: FieldEditorProps) {
  const field = useFormStore((state) => state.fields.find((f) => f.id === selectedFieldId));
  const updateField = useFormStore((state) => state.updateField);

  if (!field) return <div className="p-4">Select a field to edit</div>;

  return (
    <div className="p-4 border rounded w-64 bg-gray">
      <h3 className="font-bold mb-2">Edit Field</h3>
      <label className="block mb-2">
        Label
        <input
          type="text"
          className="w-full border rounded p-1"
          value={field.label}
          onChange={(e) => updateField(field.id, { label: e.target.value })}
        />
      </label>
      <label className="block mb-2">
        Placeholder
        <input
          type="text"
          className="w-full border rounded p-1"
          value={field.placeholder || ''}
          onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
        />
      </label>
      <label className="block mb-2">
        Required
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => updateField(field.id, { required: e.target.checked })}
          className="ml-2"
        />
      </label>
      {/* Add other settings like helpText, options for dropdown, validations */}
    </div>
  );
}
