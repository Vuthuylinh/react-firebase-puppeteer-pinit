import React,{useState, useEffect}from "react";
import firebase from "./firebaseConfig";

import SignUp from "./components/auth/SignUp";

const App =()=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("articles");
  console.log("should be articles: ", ref);

  //ONE TIME GET FUNCTION
  function getArticles() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        articles.push(doc.data());
      });
      setArticles(articles);
      setLoading(false);
    });
  }
  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="App">
      <div>
        <h1>Articles</h1>
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <h4>{article.url}</h4>
          </div>
        ))}
      </div>
      {/* div to hook upthe signUp form on the button click*/}
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default App
