import React ,{ useEffect, useState } from 'react';
import { FieldPalette } from '~/components/FieldPalette';
import { FormCanvas } from '~/components/FormCanvas';
import { FieldConfigPanel } from '~/components/FieldConfigPanel';
import { FieldEditor } from '~/components/FieldEditor';
// import { useFormStore } from '~/store/useFormStore';
import { FormPreview } from '~/components/FormPreview';
import { TemplateManager } from '~/components/TemplateManager';
import { SaveAndShare } from '~/components/SaveandShare';
import { useFormStore } from '../store/useFormStore';

export default function Index() {
  
  const selectedFieldId = useFormStore((state) => state.selectedFieldId);
   const fields = useFormStore((state) => state.fields);
  const setSelectedField = useFormStore((state) => state.setSelectedField);

  return (
    <main className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      <FieldPalette />
       <TemplateManager />
      <div className="flex flex-col flex-grow gap-4">
        <FormCanvas onFieldClick={setSelectedField} />
        <SaveAndShare/>
      </div>
      <FieldEditor selectedFieldId={selectedFieldId} />
       <FieldConfigPanel />
        <FormPreview />
    </main>
  );
}



