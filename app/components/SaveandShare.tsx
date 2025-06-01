import { useFormStore } from '~/store/useFormStore';
import { useState } from 'react';

export function SaveAndShare() {
  const fields = useFormStore((state) => state.fields);
  const [shareUrl, setShareUrl] = useState('');

  function generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  const handleSave = () => {
    const formId = generateId();
    localStorage.setItem(`form_${formId}`, JSON.stringify(fields));
    const url = `${window.location.origin}/form/fill/${formId}`;
    setShareUrl(url);
  };

  return (
    <div className="my-4">
      <button
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-all duration-200"
      >
        Save & Get Shareable Link
      </button>

      {shareUrl && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <p className="mb-1">Share this URL to let others fill the form:</p>
          <a
            href={shareUrl}
            className="text-blue-700 underline"
            target="_blank"
            rel="noreferrer"
          >
            {shareUrl}
          </a>
        </div>
      )}
    </div>
  );
}
