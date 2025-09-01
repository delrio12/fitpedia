import React, { useState } from "react";
import { extractYouTubeId } from "../utils/extractYouTubeId";



const VideoCard = ({ video, index, category, isAdmin, editVideo, deleteVideo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(video.title);
  const videoId = extractYouTubeId(video.url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  
  const handleSave = () => {
    editVideo(category, index, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="video-card">
      {isEditing ? (
        <div style={{ marginBottom: "10px" }}>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            style={{ width: "80%", marginRight: "10px", padding: "5px" }}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <h3>{video.title}</h3>
      )}
  {embedUrl && (
      <iframe
        src={embedUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
  )}

      {isAdmin && !isEditing && (
  <div style={{ marginTop: "10px" }}>
    <button onClick={() => setIsEditing(true)}>✏️ Editar</button>
    <button onClick={() => deleteVideo(category, index)} className="delete">🗑️ Borrar</button>
  </div>
)}

{isEditing && (
  <div style={{ marginBottom: "10px" }}>
    <input 
      type="text" 
      value={newTitle} 
      onChange={(e) => setNewTitle(e.target.value)} 
    />
    <button onClick={handleSave} className="save">Guardar</button>
    <button onClick={() => setIsEditing(false)} className="cancel">Cancelar</button>
  </div>
)}

    </div>
  );
};

export default VideoCard;
