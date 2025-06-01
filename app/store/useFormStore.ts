import { create } from 'zustand';

export type FieldType = 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'date';

export interface FormField {
  id: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  options?: string[]; // for dropdown or checkbox group
  validations?: {
    minLength?: number;
    maxLength?: number;
    pattern?: 'email' | 'phone' | string;
  };
  step?: number;
}

interface FormState {
  fields: FormField[];
   selectedFieldId?: string;
  addField: (field: FormField) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  reorderFields: (startIndex: number, endIndex: number) => void;
  removeField: (id: string) => void;
  setSelectedField: (id?: string) => void;
  setFields: (fields: FormField[]) => void;
}

 const useFormStore = create<FormState>((set) => ({
  fields: [],
  selectedFieldId: undefined,
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  updateField: (id, updates) =>
    set((state) => ({
      fields: state.fields.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    })),
  reorderFields: (startIndex, endIndex) =>
    set((state) => {
      const fields = Array.from(state.fields);
      const [removed] = fields.splice(startIndex, 1);
      fields.splice(endIndex, 0, removed);
      return { fields };
    }),
  removeField: (id) => set((state) => ({ fields: state.fields.filter((f) => f.id !== id) })),
  setSelectedField: (id) => 
    set(() => ({ 
      selectedFieldId: id
     })),
     setFields: (fields) => set(() => ({ fields })),
}));
console.log("Zustand is loaded!");
export { useFormStore };
export default useFormStore;
