import { useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import type { FormField } from '~/store/useFormStore';

export default function FormFiller() {
  const { formId } = useParams();
  const [fields, setFields] = useState<FormField[]>([]);

  useEffect(() => {
    if (formId) {
       console.log(`Fetching form with ID: ${formId}`);
      const data = localStorage.getItem(`form_${formId}`);
      if (data) {
         try {
        setFields(JSON.parse(data));
         } catch (error) {
        console.error("Error parsing form data:", error);
      }
    } else {
      console.warn("No form data found for:", formId);
      }
    }
  }, [formId]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Fill Form</h2>
      {fields.length === 0 ? (
        <p>No form found or loading...</p>
      ) : (
        <form className="space-y-4">
          {fields.map((field) => (
            <div key={field.id}>
              <label className="block font-medium mb-1">{field.label}</label>
              {field.type === 'text' && (
                <input
                  type="text"
                  className="w-full border px-2 py-1 rounded"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
              {field.type === 'textarea' && (
                <textarea
                  className="w-full border px-2 py-1 rounded"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
              {/* Add other field types as needed */}
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
