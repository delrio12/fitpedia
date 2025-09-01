import React, { useState } from "react";

const VideoForm = ({ addVideo }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("tecnica_ejercicios");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    addVideo({ title, url, category });
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <h2>Agregar Video</h2>
      <div>
        <label>Categoría: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="tecnica_ejercicios">Técnica y Ejercicios</option>
          <option value="nutricion">Nutrición</option>
          <option value="clases">Clases</option>
        </select>
      </div>
      <div>
        <label>Título: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL YouTube: </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default VideoForm;
