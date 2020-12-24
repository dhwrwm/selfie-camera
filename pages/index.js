import React, { useEffect, createRef } from "react";

const VIDEO_EL_WIDTH = "200";
const VIDEO_EL_HEIGHT = "300";

const Index = () => {
  let videoEle = createRef();
  let videoContainer = createRef();
  let canvasEle = createRef();
  let imageEle = createRef();

  useEffect(() => {
    startCamera();

    return () => {
      stopStream();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      console.log("the stream is", stream);

      videoEle.current.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  };

  const stopStream = () => {
    if (!window.streamRef) return;
    window.streamRef.getAudioTracks().forEach(function (track) {
      track.stop();
    });
    window.streamRef.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    window.streamRef = null;
  };

  const onCapture = () => {
    console.log("capture", videoEle.current.offsetHeight);
    const width = videoEle.current.width;
    const height = videoEle.current.offsetHeight;

    canvasEle.current.width = width;
    canvasEle.current.height = height;
    const ctx = canvasEle.current.getContext("2d");
    // the canvasEle is drawn equivalent to video element's width and height
    ctx.drawImage(videoEle.current, 0, 0, width, height);
  };

  return (
    <div className="container">
      <video
        ref={videoEle}
        className="selfie-video"
        playsInline
        autoPlay
        style={{}}
        height={VIDEO_EL_HEIGHT}
        width={VIDEO_EL_WIDTH}
        // videoWidth={VIDEO_WIDTH}
      ></video>

      <canvas ref={canvasEle} className={"selfie-canvas"} />
      <button onClick={() => onCapture()}>Capture</button>
    </div>
  );
};

export default Index;
