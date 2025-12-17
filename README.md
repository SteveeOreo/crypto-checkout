# Crypto Checkout

A modern, responsive cryptocurrency checkout application built with React, TypeScript, and Vite. This project implements a clean, user-friendly interface for processing cryptocurrency transactions, featuring two main screens: a checkout page for sending cryptocurrency and a success page for transaction confirmation.

## 🚀 Features

- **Checkout Page**: 
  - Display recipient cryptocurrency address in a styled pill component
  - Transaction details summary (amount, network, wallet)
  - Copy-to-clipboard functionality for address and amount
  - Warning message with network information
  - Responsive design for mobile and desktop

- **Success Page**:
  - Transaction processing confirmation
  - Transaction ID display with copy functionality
  - Clean, centered layout with brand logo
  - Navigation back to checkout

- **Design & UX**:
  - Modern UI matching Figma design specifications
  - Fully responsive (mobile-first approach)
  - Smooth transitions and hover effects
  - Accessible components with proper ARIA labels
  - Custom icon components (Info, Copy, Arrow Left, Check)

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── CheckoutCard.tsx    # Main card container component
│   └── icons.tsx           # Custom SVG icon components
├── pages/
│   ├── Checkout.tsx        # Checkout/send cryptocurrency page
│   └── Success.tsx        # Transaction success/processing page
├── images/
│   ├── Checkout.png        # Success indicator icon
│   └── Novacrust.png       # Brand logo
├── App.tsx                 # Main app component with routing logic
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-checkout
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Checkout Flow

1. **Checkout Page**: 
   - Review the recipient address displayed in the green pill
   - Check transaction details (amount, network, wallet)
   - Read the warning message about network requirements
   - Click "I have sent it" to confirm the transaction

2. **Success Page**:
   - View transaction processing confirmation
   - Copy the transaction ID if needed
   - Click "Go back to home" to return to checkout

### Components

#### CheckoutCard
The main container component that provides consistent styling and layout for both pages.

**Props:**
- `title?: string` - Optional title
- `subtitle?: string` - Optional subtitle
- `children: ReactNode` - Page content

#### Button
Reusable button component with loading and disabled states.

**Props:**
- `text: string` - Button label
- `loading?: boolean` - Loading state
- `disabled?: boolean` - Disabled state
- `onClick?: () => void` - Click handler
- `type?: "button" | "submit"` - Button type
- `className?: string` - Additional CSS classes

#### Icons
Custom SVG icon components:
- `ArrowLeftIcon` - Back navigation
- `CopyIcon` - Copy to clipboard
- `InfoIcon` - Information indicator
- `CheckIcon` - Success/checkmark

## 🎨 Design Details

### Color Palette
- **Primary Teal**: `#013941` - Main brand color
- **Light Green**: `#CCF6E5` - Borders and accents
- **Background Green**: `#E6FBF2` - Address pill background
- **Success Green**: `#10B981` - Success indicators
- **Dark Background**: `#000000` - Page background
- **Card Background**: `#FFFFFF` - Card background
- **Light Gray**: `#F7F7F7` - Summary card background
- **Text Colors**: Various shades of slate/gray for text hierarchy

### Typography
- **Font Family**: Outfit (primary), Instrument Sans (buttons)
- **Responsive Sizing**: Mobile-first approach with `md:` breakpoints
- **Font Weights**: Regular (400), Medium (500), Semibold (600)

### Spacing & Layout
- Consistent padding and margins throughout
- Responsive breakpoints: `md:` (768px+), `lg:` (1024px+)
- Card max-width: 640px
- Rounded corners: 20px (mobile) to 30px (desktop)

## 🔧 Development

### Code Style
- TypeScript strict mode enabled
- ESLint for code quality
- React hooks best practices
- Component-based architecture

### Key Features Implementation

- **Copy to Clipboard**: Uses the Clipboard API with fallback handling
- **State Management**: Simple React state for page navigation
- **Responsive Design**: TailwindCSS utility classes with mobile-first approach
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

Potential improvements:
- Backend integration for real transactions
- Wallet connection (MetaMask, WalletConnect)
- Multiple cryptocurrency support
- Transaction history
- Real-time transaction status updates
- Multi-language support

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React, TypeScript, and TailwindCSS
