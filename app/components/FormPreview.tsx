import React, { useState } from 'react';
import { useFormStore, FormField } from '~/store/useFormStore';

interface FormValues {
  [fieldId: string]: string;
}
type PreviewMode = 'desktop' | 'tablet' | 'mobile';

export function FormPreview() {
  const fields = useFormStore((state) => state.fields);
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<{ [id: string]: string }>({});
  const [previewMode, setPreviewMode] = useState<PreviewMode>('desktop');
  const [currentStep, setCurrentStep] = useState(1);

  const steps = Array.from(new Set(fields.map((f) => f.step || 1))).sort((a, b) => a - b);
const totalSteps = steps.length;
const fieldsInCurrentStep = fields.filter((f) => (f.step || 1) === currentStep);


  function validateField(field: FormField, value: string): string | null {
    if (field.required && !value.trim()) {
      return 'This field is required';
    }

    if (field.validations) {
      const { minLength, maxLength, pattern } = field.validations;
      if (minLength && value.length < minLength) {
        return `Minimum length is ${minLength}`;
      }
      if (maxLength && value.length > maxLength) {
        return `Maximum length is ${maxLength}`;
      }
      if (pattern === 'email') {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (value && !emailRegex.test(value)) {
          return 'Invalid email format';
        }
      }
      if (pattern === 'phone') {
        const phoneRegex = /^\+?\d{7,15}$/;
        if (value && !phoneRegex.test(value)) {
          return 'Invalid phone number';
        }
      }
    }

    return null;
  }

  function handleChange(fieldId: string, val: string) {
    setValues((prev) => ({ ...prev, [fieldId]: val }));

    const field = fields.find((f) => f.id === fieldId);
    if (field) {
      const errorMsg = validateField(field, val);
      setErrors((prev) => ({ ...prev, [fieldId]: errorMsg || '' }));
    }
  }

  function renderField(field: FormField) {
    const value = values[field.id] || '';
    const error = errors[field.id];

    const commonProps = {
      id: field.id,
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        handleChange(field.id, e.target.value),
      placeholder: field.placeholder || '',
      className:
        'border p-2 rounded w-full bg-slate-950 text-white placeholder-gray-400 border-gray-600 focus:bg-gray-600 focus:ring-2 focus:ring-gray-600 ' + (error ? 'border-red-500' : 'border-gray-300'),
      required: field.required,
    };

    switch (field.type) {
      case 'text':
        return <input type="text" {...commonProps} />;
      case 'textarea':
        return <textarea {...commonProps} />;
      case 'dropdown':
        return (
          <select {...commonProps}>
            <option value="">Select an option</option>
            {field.options?.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div>
            {field.options?.map((opt, i) => {
              const selected = value ? value.split(',') : [];
              return (
                <label key={i} className="block">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt)}
                    onChange={(e) => {
                      let newVal = [...selected];
                      if (e.target.checked) {
                        newVal.push(opt);
                      } else {
                        newVal = newVal.filter((v) => v !== opt);
                      }
                      handleChange(field.id, newVal.join(','));
                    }}
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              );
            })}
          </div>
        );
      case 'date':
        return <input type="date" {...commonProps} />;
      default:
        return <div>Unsupported field type</div>;
    }
  }

 return (
  <div>
    {/* Preview Mode Buttons */}
    <div className="mb-4 flex flex-col space-y-4 items-stretch ">
      {(['desktop', 'tablet', 'mobile'] as PreviewMode[]).map((mode) => (
        <button
          key={mode}
          className={`w-full rounded ${
            previewMode === mode ? 'bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 w-full text-center' : 'bg-gray-200 font-medium py-2 px-4 w-full text-center'
          }`}
          onClick={() => setPreviewMode(mode)}
        >
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </button>
      ))}
    </div>

    {/* ✅ Progress Indicator */}
    <div className="mb-4 text-sm text-gray-600">
      Step {currentStep} of {totalSteps}
    </div>

    {/* Responsive Form Preview Container */}
    <form
      className={`p-6 border rounded bg-gray-800 text-white shadow-xl ${
        previewMode === 'desktop'
          ? 'max-w-4xl w-full'
          : previewMode === 'tablet'
          ? 'max-w-md w-full'
          : 'max-w-xs w-full'
      } space-y-4`}
      onSubmit={(e) => {
        e.preventDefault();
        let hasError = false;
        const newErrors: { [id: string]: string } = {};
        fields.forEach((field) => {
          const error = validateField(field, values[field.id] || '');
          if (error) {
            hasError = true;
            newErrors[field.id] = error;
          }
        });
        setErrors(newErrors);
        if (!hasError) {
          alert('Form is valid!');
        }
      }}
    >
      <h2 className="text-lg font-bold mb-4">Form Preview</h2>
      {fields.length === 0 && <p>No fields added yet</p>}
      {fieldsInCurrentStep.map((field) => (
        <div key={field.id} className="mb-4 p-4 bg-gray-800 text-white rounded shadow-lg">
          <label htmlFor={field.id} className="block text-lg font-semibold">
  {field.label || "Unnamed Field"}
</label>
          {renderField(field)}
          {errors[field.id] && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors[field.id]}</p>
          )}
          {field.helpText && (
            <p className="text-gray-500 text-sm italic">{field.helpText}</p>
          )}
        </div>
      ))}

      {/* Step Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>
        )}

        {currentStep < totalSteps && (
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              let hasError = false;
              const newErrors: { [id: string]: string } = {};
              fieldsInCurrentStep.forEach((field) => {
                const error = validateField(field, values[field.id] || '');
                if (error) {
                  hasError = true;
                  newErrors[field.id] = error;
                }
              });
              setErrors((prev) => ({ ...prev, ...newErrors }));
              if (!hasError) setCurrentStep(currentStep + 1);
            }}
          >
            Next
          </button>
        )}

        {currentStep === totalSteps && (
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              let hasError = false;
              const newErrors: { [id: string]: string } = {};
              fields.forEach((field) => {
                const error = validateField(field, values[field.id] || '');
                if (error) {
                  hasError = true;
                  newErrors[field.id] = error;
                }
              });
              setErrors(newErrors);
              if (!hasError) {
                alert('Form is valid!');
              }
            }}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  </div>
);
}
