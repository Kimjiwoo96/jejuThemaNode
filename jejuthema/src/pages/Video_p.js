import React from 'react';
import {Div} from "../js/CommonUi"

function Video_p() {
  const videoSy = {width: "100%"};

  return (
    <Div>
      <video style={videoSy} autoPlay muted loop>
        <source src="/video/jejuVideo.mp4" type="video/mp4" />
      </video>
    </Div>
  );
}

export default Video_p;
