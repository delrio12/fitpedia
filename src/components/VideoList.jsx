import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos, category, isAdmin, editVideo, deleteVideo }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          video={video}
          index={index}
          category={category}
          isAdmin={isAdmin}
          editVideo={editVideo}
          deleteVideo={deleteVideo}
        />
      ))}
    </div>
  );
};

export default VideoList;
