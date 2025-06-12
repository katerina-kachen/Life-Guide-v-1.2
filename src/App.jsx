import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const themes = {
  black: { background: "#000", color: "#fff" },
  white: { background: "#fff", color: "#333" },
  floral: { background: "#ffe4e6", color: "#9f1239" },
  nature: { background: "#dcfce7", color: "#166534" },
};

function Home() {
  const [theme, setTheme] = useState("floral");

  const sections = [
    "Strava",
    "Cvičení",
    "Progres",
    "Spánek",
    "Kalendář",
    "Menstruační cyklus",
  ];

  return (
    <div style={{ minHeight: "100vh", padding: 24, ...themes[theme] }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 16, display: "flex", gap: 8, justifyContent: "center" }}>
          {Object.keys(themes).map(t => (
            <button key={t} onClick={() => setTheme(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <img src="https://via.placeholder.com/80" alt="Life Guide Logo" style={{ height: 80, marginBottom: 16 }} />
        <h1>Vítej v Life Guide aplikaci</h1>
        <p>Aplikace, která ti pomůže zorganizovat život.</p>

        <img src="https://via.placeholder.com/160" alt="Profilová fotografie"
             style={{ borderRadius: "50%", width: 160, height: 160, margin: "24px auto", objectFit: "cover" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16
        }}>
          {sections.map(name => (
            <Link key={name} to={`/${name.toLowerCase().replace(/ /g, "")}`}>
              <div style={{
                padding: 16, background: "rgba(255,255,255,0.8)",
                borderRadius: 8, cursor: "pointer"
              }}>{name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ name }) {
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <Link to="/">← Zpět</Link>
      <h2>{name}</h2>
      <p>Zde bude obsah sekce <strong>{name}</strong>.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {["Strava","Cvičení","Progres","Spánek","Kalendář","Menstruační cyklus"]
          .map(name =>
            <Route
              key={name}
              path={`/${name.toLowerCase().replace(/ /g,"")}`}
              element={<Section name={name} />}
            />
          )}
      </Routes>
    </Router>
  );
}
