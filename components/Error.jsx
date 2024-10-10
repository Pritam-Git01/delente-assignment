import { AlertCircle } from "lucide-react";

export default function ErrorUI({ message, handleReload }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Oops! Something went wrong</h2>
          <p className="mb-8 text-center text-gray-600">{message}</p>
          <button
            onClick={handleReload}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }