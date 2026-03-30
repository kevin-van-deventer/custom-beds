# Custom Beds - Bespoke Luxury Bedding & Furniture

Custom Beds is a premium, modern web application designed for a custom bed company. It provides a seamless experience for customers to explore luxury bedding, mattresses, and headboards, while offering a sophisticated "Bespoke Journey" for custom-made furniture.

## 🚀 Tech Stack & Frameworks

- **Frontend**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Utility-first CSS)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router Dom 7](https://reactrouter.com/)
- **State Management**: React Context API (Auth & Cart)

## 🔐 Authentication

- **Provider**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Method**: Google OAuth (Popup-based for seamless integration)
- **Security**: Role-based access control (RBAC) implemented via Firestore security rules to protect admin routes and sensitive user data.

## 📂 Database

- **Provider**: [Cloud Firestore](https://firebase.google.com/docs/firestore) (NoSQL)
- **Structure**:
  - `products`: Catalog of mattresses, bases, headboards, and covers.
  - `orders`: Customer orders and bespoke project requests.
  - `users`: User profiles and role management.
- **Rules**: Strict security rules ensuring users can only access their own data, while admins have full CRUD capabilities.

## 🌐 Hosting & Deployment

- **Platform**: [Google Cloud Run](https://cloud.google.com/run)
- **Environment**: Containerized deployment via AI Studio Build.
- **Port**: Standardized on port 3000.

## 🔍 SEO & Meta Data

### Optimizations Done:
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, and `<section>` tags.
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities.
- **Lazy Loading**: Route-based code splitting using `React.lazy` and `Suspense` for faster initial load.
- **Meta Tags**: Basic viewport and charset configuration.
- **Alt Text**: Descriptive alt text for all critical imagery.

### 📝 Tasks (To Be Done):
#### SEO & Metadata
- [x] **Sitemap**: Generate a dynamic `sitemap.xml` for search engine indexing.
- [x] **JSON-LD**: Implement structured data for products and local business information.
- [x] **Open Graph**: Add OG tags for rich social media sharing (Facebook, Twitter, LinkedIn).
- [x] **Canonical URLs**: Ensure unique URLs to prevent duplicate content issues.
- [x] **Robots.txt**: Configure search engine crawling permissions.

#### 🔐 Environment Setup (Secrets Panel)
- [ ] **Stripe Secret Key**: Add `STRIPE_SECRET_KEY` to AI Studio Secrets for backend payments.
- [ ] **Stripe Publishable Key**: Add `VITE_STRIPE_PUBLISHABLE_KEY` to AI Studio Secrets for frontend integration.
- [ ] **SendGrid API Key**: Add `SENDGRID_API_KEY` to AI Studio Secrets for email notifications.
- [ ] **Analytics ID**: Add `VITE_ANALYTICS_ID` to AI Studio Secrets for tracking.

## 🎨 Assets & Design

- **Images**:
  - High-resolution bedroom setups and product displays stored in `/public/images`.
  - Dynamic lifestyle imagery sourced from [Unsplash](https://unsplash.com/).
- **Typography**:
  - **Inter**: Primary sans-serif for legibility.
  - **Playfair Display**: Elegant serif for headings and luxury accents.
- **Design Feeling**: A "Technical Atelier" aesthetic for the custom beds page, contrasting with a clean, editorial look for the shop.

## 🛠️ Comprehensive Creation Plan (From Scratch)

1. **Initialization**:
   - Scaffold the project using `npm create vite@latest luxe-bed -- --template react-ts`.
   - Install core dependencies: `npm install firebase lucide-react motion react-router-dom tailwindcss @tailwindcss/vite`.

2. **Styling Configuration**:
   - Set up Tailwind CSS 4 with custom theme variables for `gold`, `ink`, and `paper` colors.
   - Configure global typography in `index.css`.

3. **Firebase Setup**:
   - Provision a Firebase project and enable Auth (Google) and Firestore.
   - Create `firebase.ts` for SDK initialization.
   - Define `firestore.rules` for data protection.

4. **Architecture & Layout**:
   - Build a responsive `Navbar` and `Footer`.
   - Implement a global `Layout` wrapper with `AuthProvider` and `CartProvider`.

5. **Core Feature Development**:
   - **Shop**: Build category grids and product detail pages.
   - **Cart**: Implement local storage persistence and checkout flow.
   - **Bespoke Journey**: Create the interactive "Custom Beds" page with the `BespokeOrderModal`.
   - **Admin**: Build a dashboard for product and order management.

6. **Animations & Polish**:
   - Add entrance animations and scroll-triggered effects using `motion`.
   - Implement "Glassmorphism" and "Technical Grid" overlays for a premium feel.

7. **SEO & Production Readiness**:
   - Optimize images (WebP format, lazy loading).
   - Configure environment variables in `.env.example`.
   - Final build verification using `npm run build`.

---
*Created with Google AI Studio Build*
