# **Next.js Full-Stack Application**

This project demonstrates a complete implementation of various Next.js features, including static generation, server-side rendering, dynamic imports, context API, and more. It fetches data from static JSON files and external APIs and showcases optimized UI components.

## **Table of Contents**

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Technologies Used](#technologies-used)
- [Features Breakdown](#features-breakdown)
- [Dynamic Imports](#dynamic-imports)
- [SEO Optimization](#seo-optimization)

## **Features**

1. **Static and Dynamic Routing:**
   - The app uses static generation for the homepage and dynamic routing for individual blog posts.
   - Blog posts are fetched from a static JSON file and displayed dynamically on pages like `/posts/[id]`.

2. **Server-Side Rendering:**
   - It fetches users from an external API using `getServerSideProps` and displays them in a user list format.

3. **Custom API Routes:**
   - The app has custom API routes for managing a list of products with `GET` and `POST` requests.

4. **Image Optimization:**
   - It utilizes the `<Image />` component to optimize images fetched from external APIs, ensuring responsive and fast-loading images.

5. **React State Management:**
   - Implements a counter component using `useState` hooks with "Increment" and "Decrement" functionality.

6. **Data Fetching with `useEffect`:**
   - Fetches a list of todos from an external API and displays them on the page, with a loading indicator while the data is being fetched.

7. **Global Theme with Context API:**
   - A global theme switcher is implemented using React’s Context API, allowing users to toggle between "Light" and "Dark" modes. The theme is persisted using `localStorage`.

8. **Dynamic Imports:**
   - Large components, like the product details page, are loaded dynamically, improving performance and enabling code splitting.

9. **Custom 404 Page:**
   - A user-friendly custom 404 page with a message and link to go back to the homepage is created.

10. **SEO Optimization:**
    - Enhanced SEO for blog posts using the `next/head` component, with dynamic titles, descriptions, and Open Graph meta tags for better social media sharing.

## **Project Structure**

```bash
├── components      # Reusable React components
├── context         # Context API for global state management
├── data            # Static JSON data for the blog posts
├── pages           # Next.js pages (dynamic routing and API routes)
├── public          # Public assets (images, etc.)
├── styles          # Global CSS and Tailwind configuration
├── .eslintrc.json  # ESLint configuration
├── README.md       # Project documentation
├── jsconfig.json   # JavaScript configuration
├── next.config.mjs # Next.js configuration
├── package.json    # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
```

## **Installation**

Follow these steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## **Running the App**

To run the application locally, use the following command:

```bash
npm run dev
```

The app will be running at `http://localhost:3000`.

## **Technologies Used**

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.
- **JSONPlaceholder API**: External API for demo data fetching.
- **Axios/Fetch API**: For making API requests.
- **ESLint**: Tool for linting JavaScript code.
- **PostCSS**: For transforming CSS.

## **Features Breakdown**

### 1. Static and Dynamic Routing

- Static homepage that lists blog posts from a `posts.json` file.
- Dynamic route for individual blog posts using `getStaticProps` and `getStaticPaths` for static generation.
  
### 2. Server-Side Data Fetching

- The `/users` page fetches a list of users from `https://jsonplaceholder.typicode.com/users` using `getServerSideProps`.
- Displays the user data in a table with names, emails, and phone numbers.

### 3. Custom API Route

- A custom API route is created at `/api/products` that supports both `GET` and `POST` methods. Data is stored in-memory for demonstration purposes.

### 4. Image Optimization

- The app fetches product images from `https://fakestoreapi.com/products` and uses Next.js's `<Image />` component for optimization.
- Images are responsive and lazy-loaded, improving performance.

### 5. React State Management

- The counter component utilizes `useState` for incrementing and decrementing values, with a conditional "Decrement" button disabled when the value is 0.

### 6. Data Fetching in a React Component

- Uses the `useEffect` hook to fetch data from `https://jsonplaceholder.typicode.com/todos` and displays the first 10 todos.

### 7. Context API for Global Theme Management

- Global theme management using React Context API.
- A toggle button allows switching between "Light" and "Dark" modes, with persistence using `localStorage`.

### 8. Dynamic Imports

- A large product details component is dynamically imported to improve performance. A loading spinner is shown while the component is being loaded.

### 9. Custom 404 Page

- A custom `404.js` page in `pages` directory displays a user-friendly message and a link to return to the homepage.

## **Dynamic Imports**

For performance optimization, the product detail page leverages dynamic imports:

```js
const ProductDetails = dynamic(() => import('../components/ProductDetails'), {
  loading: () => <p>Loading...</p>,
});
```

## **SEO Optimization**

SEO enhancements are implemented in the `pages/posts/[id].js` file using `next/head` for dynamic meta tags:

```js
import Head from 'next/head';

<Head>
  <title>{post.title}</title>
  <meta name="description" content={post.description} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.description} />
  <meta property="og:type" content="article" />
</Head>
```

This ensures the title, description, and Open Graph (OG) tags are optimized for search engines and social sharing.

---

### **Contributions**

Feel free to contribute! Submit a pull request or open an issue if you find any bugs or have feature requests.

---

This **README** covers all aspects of the project from installation to features and optimization techniques used. Let me know if you'd like any adjustments or additions!
