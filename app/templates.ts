import type { FormField } from '~/store/useFormStore';

export const templates: { [key: string]: FormField[] } = {
  contactUs: [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      step: 1,
    },
    {
      id: 'email',
      type: 'text',
      label: 'Email',
      required: true,
      validations: { pattern: 'email' },
      step: 1,
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Message',
      required: true,
      step: 2,
    },
  ],
  survey: [
    {
      id: 'age',
      type: 'dropdown',
      label: 'Age Range',
      options: ['Under 18', '18-25', '26-40', '41+'],
      required: true,
      step: 1,
    },
    {
      id: 'feedback',
      type: 'textarea',
      label: 'Feedback',
      required: false,
      step: 2,
    },
  ],
};
