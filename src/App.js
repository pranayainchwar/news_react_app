// Importing necessary modules and components
import React from "react";
import Navbar from "./components/Navbar"; // Navbar component for navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router components for handling routes
import Home from "./Pages/Home"; // Component for the Home page
import FetchData from "./components/FetchData"; // Component for fetching dynamic data
import Footer from "./components/Footer"; // Footer component
import { UserProvider } from "./UserContext.js"; // Import the UserProvider
// Main App component
const App = () => {
  return (
    <>
      {" "}
      <UserProvider>
        {/* Setting up React Router for navigation */}
        <Router>
          {/* Displaying the Navbar */}
          <Navbar />

          {/* Defining routes for different pages */}
          <Routes>
            {/* Route for the Home page */}
            <Route exact path="/" element={<Home />} />

            {/* Routes for different categories */}
            <Route
              exact
              path="/general"
              element={<FetchData cat="general" />}
            />
            <Route
              exact
              path="/business"
              element={<FetchData cat="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<FetchData cat="entertainment" />}
            />
            <Route exact path="/health" element={<FetchData cat="health" />} />
            <Route
              exact
              path="/science"
              element={<FetchData cat="science" />}
            />
            <Route exact path="/sports" element={<FetchData cat="sports" />} />
            <Route
              exact
              path="/technology"
              element={<FetchData cat="technology" />}
            />
          </Routes>

          {/* Displaying the Footer */}
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
};

// Exporting the App component as the default export
export default App;
