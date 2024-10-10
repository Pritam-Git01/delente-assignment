"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import ErrorUI from "./Error";
import LoaderUI from "./Loader";


export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      // console.log(response.data)
      setTodos(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      // console.log(error);
      setError(error.message || "An error occurred while fetching products.");
      setTodos([]);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <LoaderUI />;
  }

  if (error) {
    return <ErrorUI message={error} handleReload={fetchTodos}/>;
  }




  
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-16">
      <h1 className="text-3xl font-bold mb-8 text-foreground text-center">Todos</h1>

      <TitleList titles={todos} />
    </div>
  );
}

const TitleList = ({ titles }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background shadow-lg rounded-lg">
      <ul className="space-y-4">
        {titles.map((item, index) => (
          <li 
            key={index}
            className="bg-cardBg hover:bg-gray-200 transition-colors duration-200 ease-in-out rounded-lg shadow-sm"
          >
            <a 
              href="#" 
              className="block p-4 text-lg text-foreground hover:text-primary font-medium"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};