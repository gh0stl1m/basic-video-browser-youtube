// Libraries
import React, { Component } from 'react';

// Components
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  // Map single videos
  const videoList = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = { onVideoSelect }
        key = { video.id.videoId }
        video = { video }
      />
    );
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoList}
    </ul>
  );
}; 

export default VideoList;
