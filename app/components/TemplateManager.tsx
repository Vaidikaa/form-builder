import React from 'react';
import { useFormStore, FormField } from '~/store/useFormStore';

const predefinedTemplates: { [key: string]: FormField[] } = {
  'Contact Us': [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      id: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      validations: { pattern: 'email' },
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Message',
      required: true,
    },
  ],
  'Job Application': [
    {
      id: 'fullname',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      id: 'email',
      type: 'text',
      label: 'Email',
      required: true,
      validations: { pattern: 'email' },
    },
    {
      id: 'resume',
      type: 'text',
      label: 'Resume Link',
    },
  ],
};

export function TemplateManager() {
  const setFields = useFormStore((s) => s.setFields);
  const fields = useFormStore((s) => s.fields);

  const saveTemplate = () => {
    localStorage.setItem('customTemplate', JSON.stringify(fields));
    alert('Template saved!');
  };

  const loadTemplate = () => {
    const template = localStorage.getItem('customTemplate');
    if (template) {
      setFields(JSON.parse(template));
    } else {
      alert('No saved template found.');
    }
  };

  const loadPredefined = (key: string) => {
    setFields(predefinedTemplates[key]);
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-xs">
      <h3 className="font-semibold text-lg mb-2">Templates</h3>
      <div className="space-y-2">
        {Object.keys(predefinedTemplates).map((key) => (
          <button
            key={key}
            className="w-full bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-left"
            onClick={() => loadPredefined(key)}
          >
            Load: {key}
          </button>
        ))}

        <hr className="my-2" />

        <button
          onClick={saveTemplate}
          className="w-full bg-blue-600 text-white px-3 py-1 rounded"
        >
          Save Current as Template
        </button>

        <button
          onClick={loadTemplate}
          className="w-full bg-green-600 text-white px-3 py-1 rounded"
        >
          Load Saved Template
        </button>
      </div>
    </div>
  );
}
