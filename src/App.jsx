import React, { useState, useEffect } from "react";
import VideoList from "./components/VideoList";
import VideoForm from "./components/VideoForm";
import './styles.css';

const App = () => {
  const [videos, setVideos] = useState({
    tecnica_ejercicios: [],
    nutricion: [],
    clases: []
  });

  const isAdmin = window.location.search === "?admin=true";

  useEffect(() => {
    const saved = localStorage.getItem("videos");
    if (saved) setVideos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const addVideo = ({ title, url, category }) => {
    setVideos(prev => ({
      ...prev,
      [category]: [...prev[category], { title, url }]
    }));
  };

  const editVideo = (category, index, newTitle) => {
    setVideos(prev => {
      const updated = { ...prev };
      updated[category][index].title = newTitle;
      return updated;
    });
  };

  const deleteVideo = (category, index) => {
    setVideos(prev => {
      const updated = { ...prev };
      updated[category].splice(index, 1);
      return updated;
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Diego Del Rio - Videos</h1>

      {isAdmin && (
        <div className="admin-banner">
          ⚠️ Modo Administrador activo - Puedes agregar, editar y borrar videos
        </div>
      )}

      {isAdmin && <VideoForm addVideo={addVideo} />}

      <h2>Técnica y Ejercicios</h2>
      <VideoList
        videos={videos.tecnica_ejercicios}
        category="tecnica_ejercicios"
        isAdmin={isAdmin}
        editVideo={editVideo}
        deleteVideo={deleteVideo}
      />

      <h2>Nutrición</h2>
      <VideoList
        videos={videos.nutricion}
        category="nutricion"
        isAdmin={isAdmin}
        editVideo={editVideo}
        deleteVideo={deleteVideo}
      />

      <h2>Clases</h2>
      <VideoList
        videos={videos.clases}
        category="clases"
        isAdmin={isAdmin}
        editVideo={editVideo}
        deleteVideo={deleteVideo}
      />
    </div>
  );
};

export default App;
