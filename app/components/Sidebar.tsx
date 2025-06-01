import { useFormStore } from "~/store/useFormStore"

const fieldTypes = [
  { type: "text", label: "Text Field" },
  { type: "textarea", label: "Textarea" },
  { type: "dropdown", label: "Dropdown" },
  { type: "checkbox", label: "Checkbox" },
  { type: "date", label: "Date" },
]

export default function Sidebar() {
  const addField = useFormStore((state) => state.addField)

  return (
    <aside className="w-1/4 p-4 border-r bg-gray-40 dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Add Fields</h2>
      <div className="flex flex-col gap-3">
        {fieldTypes.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => addField(type as any)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ➕ {label}
          </button>
        ))}
      </div>
    </aside>
  )
}
