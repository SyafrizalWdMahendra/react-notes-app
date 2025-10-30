import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/home/index";
import NoteDetails from "./pages/details/index";
import CreateNotes from "./pages/create/index";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ArchivedNotes from "./pages/archived";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  getAccessToken,
  putAccessToken,
  getUserLogged,
} from "./utils/network-data";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = getAccessToken();
      if (accessToken) {
        const user = await getUserLogged();
        setAuthedUser(user);
      }
      setInitializing(false);
    };

    checkAuth();
  }, []);

  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const user = await getUserLogged();
    setAuthedUser(user);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const appContextValue = useMemo(
    () => ({
      authedUser,
      onLogout,
    }),
    [authedUser]
  );

  if (initializing) {
    return (
      <div className="app-container">
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!authedUser) {
    return (
      <ThemeProvider>
        <BrowserRouter>
          <div className="app-container">
            <Navbar authedUser={null} onLogout={null} />
            <main>
              <Routes>
                <Route
                  path="/login"
                  element={<LoginPage onLogin={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar
            authedUser={appContextValue.authedUser}
            onLogout={appContextValue.onLogout}
          />
          <main>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/notes/:id" element={<NoteDetails />} />
              <Route path="/notes/new" element={<CreateNotes />} />
              <Route path="/archived" element={<ArchivedNotes />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
