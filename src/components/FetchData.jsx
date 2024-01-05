import React, { useContext, useState, useEffect } from "react"; // Import useContext, useState, useEffect
import axios from "axios";
import { UserContext } from "../UserContext.js"; // Import UserContext
const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=8459098d2b614414a0256bbb12eda59c`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=8459098d2b614414a0256bbb12eda59c"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);

  const { isLoggedIn } = useContext(UserContext); // Access isLoggedIn state from context

  // const handleClick = () => {
  //   if (!isLoggedIn) {
  //     // Redirect to login if user is not logged in
  //     window.location.href = "/login"; // Or use React Router's history to push the login route
  //   } else {
  //     // Proceed with the View More functionality
  //     // ...
  //   }
  // };

  return (
    <div className=" container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3">
        {Data
          ? Data.map((items, index) => (
              <>
                <div
                  key={index}
                  className="containe my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "5px",
                  }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Image not found"
                      className="image-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p>{items.content}</p>
                  <a href={items.url} target="blank">
                    View More
                  </a>
                </div>
              </>
            ))
          : "Loading...."}
      </div>
    </div>
  );
};

export default FetchData;
