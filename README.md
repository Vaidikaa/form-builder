#  Form Builder
A powerful, fully customizable **Form Builder** built using **React Remix** and **Tailwind CSS**, allowing users to visually build, preview, and share forms in real-time. This project was developed as part of an SDE Intern frontend assignment.

##  Live Demo
Live Deployed Site - https://hypergro-form-builder.vercel.app/
Video Walkthrough -https://drive.google.com/file/d/1RB2UZL_HFrVUNNOZ9AEROWnnqLScXwnk/view?usp=sharing
GitHub Repository-https://github.com/Vaidikaa/form-builder

## Features

 Drag-and-drop interface for building forms  
 Field types: Text, Textarea, Dropdown, Checkbox, Date  
 Reorder fields via drag actions  
 Field configuration:
- Label
- Placeholder
- Help text
- Required
- Options (for dropdowns)  

 Real-time preview with validation:
- Required fields
- Min/Max length
- Pattern matching (e.g., email, phone)

 Preview modes: Desktop, Tablet, Mobile  
 Multi-step form support with:
- Navigation
- Validation
- Progress indicator

Save/load form templates (e.g., Contact Us)  
 Shareable Form ID:
- Public “Form Filler” view
- Load form from localStorage by ID  

Bonus Features:
- Auto-save
- Export form configuration (JSON)
- Responsive design
- Keyboard accessible UI

##  Tech Stack

| Technology      | Description |
|----------------|-------------|
| **React Remix**  | Full-stack framework with great support for routing and loaders |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Zustand**      | Simple, scalable state management |
| **LocalStorage** | Used for saving forms locally and generating shareable links |
| **TypeScript**   |  Ensures strong typing and safer code |

##  Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Vaidikaa/form-builder.git
cd form-builder

# Install dependencies
npm install

# Run the development server
npm run dev

Project Structure
├── app/
│   ├── components/       # Reusable UI components
│   ├── routes/           # Remix route files
│   ├── store/            # Zustand store
│   ├── utils/            # Helper functions
│   ├── styles/           # Tailwind styles
│   └── types/            # Type definitions
├── public/
├── README.md
├── package.json
└── tailwind.config.js



#Deployment
The project is deployed using Vercel. On every push to main, changes are automatically deployed.
#Contributing
While this was built as part of a solo assignment, feel free to fork and play with the code!
#License
This project is not officially licensed but can be used for educational purposes.

#Author
Made by Vaidika Nikhoriya



