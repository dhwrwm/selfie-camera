import React, { useEffect, createRef, useState } from "react";

import Camera from "components/camera";
import Canvas from "components/canvas";
import RatioSelector from "components/ratio-selector";
import BorderSelector from "components/border-selector";
import { Container } from "components/common";
import { Button } from "components/ratio-selector/styled";
import { drawImageProp } from "helpers/canvas";

import { FOUR_BY_THREE } from "constants/index";

const VIDEO_EL_WIDTH = "200";
const VIDEO_EL_HEIGHT = "300";

const Index = () => {
  let videoEle = createRef();
  let canvasEle = createRef();

  const [selected, setSelected] = useState(FOUR_BY_THREE);
  const [hasCaptured, setCaptured] = useState(false);
  const [isCamAllowed, setCamAllowed] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);

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

      videoEle.current.srcObject = stream;
      setCamAllowed(true);
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
    const width = videoEle.current.offsetWidth;
    const height = videoEle.current.offsetHeight;

    canvasEle.current.width = width;
    canvasEle.current.height = height;
    const ctx = canvasEle.current.getContext("2d");
    setCaptured(true);
    drawImageProp(ctx, videoEle.current, 0, 0, width, height);
  };

  return (
    <Container>
      <Camera
        isCamAllowed={isCamAllowed}
        videoEle={videoEle}
        VIDEO_EL_WIDTH={VIDEO_EL_WIDTH}
        VIDEO_EL_HEIGHT={VIDEO_EL_HEIGHT}
        selected={selected}
        hide={hasCaptured}
        borderRadius={borderRadius}
      />
      <Canvas
        canvasEle={canvasEle}
        hide={!hasCaptured}
        borderRadius={borderRadius}
      />
      {hasCaptured && (
        <Button onClick={() => setCaptured(false)}>Retake</Button>
      )}
      {!hasCaptured && (
        <RatioSelector
          onSelect={(ratio) => setSelected(ratio)}
          selected={selected}
        />
      )}
      {!hasCaptured && (
        <BorderSelector
          onChange={(radius) => setBorderRadius(radius)}
          borderRadius={borderRadius}
        />
      )}
      <Button onClick={() => onCapture()}>Capture</Button>
    </Container>
  );
};

export default Index;
