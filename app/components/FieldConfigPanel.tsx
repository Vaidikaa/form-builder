import React from 'react';
import { useFormStore } from '~/store/useFormStore';

export function FieldConfigPanel() {
  const fields = useFormStore((s) => s.fields);
  const selectedId = useFormStore((s) => s.selectedFieldId);
  const updateField = useFormStore((s) => s.updateField);

  const field = fields.find((f) => f.id === selectedId);
  if (!field) return <div className="w-full p-4 text-gray-600">No field selected</div>;

  return (
    <div className="w-full max-w-sm p-4 border rounded bg-slate-950 border-slate-700">
      <h3 className="text-lg text-white font-semibold mb-3">Edit Field</h3>

      <div className="mb-2">
        <label className="block text-sm text-white ">Label</label>
        <input
          type="text"
          value={field.label}
          onChange={(e) => updateField(field.id, { label: e.target.value })}
          className="w-full text-white p-2 border rounded"
        />
      </div>

      {['text', 'textarea'].includes(field.type) && (
        <div className="mb-2">
          <label className="block text-sm text-white">Placeholder</label>
          <input
            type="text"
            value={field.placeholder || ''}
            onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
            className="w-full text-white p-2 border rounded"
          />
        </div>
      )}

      <div className="mb-2">
        <label className="block text-sm text-white">Required</label>
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => updateField(field.id, { required: e.target.checked })}
        />
      </div>

      {['dropdown', 'checkbox'].includes(field.type) && (
        <div className="mb-2">
          <label className="block text-sm">Options (comma separated)</label>
          <input
            type="text"
            value={field.options?.join(', ') || ''}
            onChange={(e) =>
              updateField(field.id, {
                options: e.target.value.split(',').map((s) => s.trim()),
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      )}
    </div>
  );
}
