import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-6">
            About QueryForge
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to QueryForge, your ultimate platform for crafting, testing, and optimizing database queries with unparalleled ease and efficiency. Our mission is to empower developers, data analysts, and database administrators to interact with their data more intuitively and effectively.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            At QueryForge, we understand the complexities of database management and the critical role well-formed queries play in data retrieval and manipulation. That's why we've built a robust, user-friendly environment that supports a wide range of database systems and query languages.
          </p>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-3 mt-6">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            To be the leading online tool for database query development, fostering a community where knowledge sharing and best practices in data interaction thrive. We aim to simplify complex database operations, making them accessible to everyone from beginners to seasoned professionals.
          </p>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-3 mt-6">
            Key Features (Placeholder)
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Intuitive Query Editor with Syntax Highlighting</li>
            <li>Real-time Query Execution and Result Display</li>
            <li>Schema Exploration and Autocompletion</li>
            <li>Version Control for Queries</li>
            <li>Collaboration Tools for Teams</li>
            <li>Performance Analysis and Optimization Suggestions</li>
            <li>Secure Data Handling and Access Control</li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Join the QueryForge community today and transform the way you interact with your databases!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}