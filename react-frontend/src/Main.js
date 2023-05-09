import React from "react";
import { useState, useEffect } from "react";
import Article from "./Article";
import Navbar from "./Navbar";

export default function Main() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("All Articles");

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFilter = (filterType) => {
    setType(filterType);
    console.log(filterType);
  };

  return (
    <>
      <div class="flex">
        <div class="fixed inset-y-0 left-0 w-1/5 bg-gray-800">
          <Navbar handleFilter={handleFilter} />
        </div>
        <div class="flex-1 ml-80">


          <p className="text-center text-3xl font-bold mt-8 mb-4 mr-20"> {type} </p>

          <div>
            {articles.map((article) => (
              <Article
                title={article.title}
                body={article.body}
                published={article.published}
                created_at={article.created_at}
              />
            ))}
          </div>
          <br />

        </div>
      </div>
    </>
  );
}
