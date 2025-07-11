import React, { useRef, useEffect } from 'react';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import '@tensorflow/tfjs-backend-webgl';

const GestureControl = () => {
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const lastActionTime = useRef(0);
  const smoothingBuffer = useRef({
    thumbX: [],
    thumbY: [],
    indexX: [],
    indexY: [],
  });

  const getAverage = (arr) =>
    arr.reduce((a, b) => a + b, 0) / arr.length || 0;

  useEffect(() => {
    const detectGesture = async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4 &&
        modelRef.current
      ) {
        const predictions = await modelRef.current.estimateHands(
          webcamRef.current.video
        );

        if (predictions.length > 0) {
          const landmarks = predictions[0].landmarks;
          const [thumbX, thumbY] = landmarks[4]; // Thumb tip
          const [indexX, indexY] = landmarks[8]; // Index tip

          smoothingBuffer.current.thumbX.push(thumbX);
          smoothingBuffer.current.thumbY.push(thumbY);
          smoothingBuffer.current.indexX.push(indexX);
          smoothingBuffer.current.indexY.push(indexY);

          // Keep only the latest 5 values
          Object.keys(smoothingBuffer.current).forEach((key) => {
            if (smoothingBuffer.current[key].length > 5) {
              smoothingBuffer.current[key].shift();
            }
          });

          const avgThumbX = getAverage(smoothingBuffer.current.thumbX);
          const avgThumbY = getAverage(smoothingBuffer.current.thumbY);
          const avgIndexX = getAverage(smoothingBuffer.current.indexX);
          const avgIndexY = getAverage(smoothingBuffer.current.indexY);

          const deltaX = avgThumbX - avgIndexX;
          const deltaY = avgThumbY - avgIndexY;

          const now = Date.now();
          if (now - lastActionTime.current > 600) {
            // Scroll based on direction
            if (deltaY > 40) {
              window.scrollBy({ top: 100, behavior: 'smooth' }); // Down
              lastActionTime.current = now;
            } else if (deltaY < -40) {
              window.scrollBy({ top: -100, behavior: 'smooth' }); // Up
              lastActionTime.current = now;
            } else if (deltaX > 40) {
              window.scrollBy({ left: 100, behavior: 'smooth' }); // Right
              lastActionTime.current = now;
            } else if (deltaX < -40) {
              window.scrollBy({ left: -100, behavior: 'smooth' }); // Left
              lastActionTime.current = now;
            }
          }
        }
      }

      requestAnimationFrame(detectGesture);
    };

    const loadModel = async () => {
      modelRef.current = await handpose.load();
      detectGesture();
    };

    loadModel();

    return () => {
      modelRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 10, right: 10 }}>
      <Webcam
        ref={webcamRef}
        style={{
          width: 100,
          height: 80,
          opacity: 0.3,
          borderRadius: '8px',
        }}
      />
      <p style={{ fontSize: 12, color: '#333' }}>🖐 Gesture Control On</p>
    </div>
  );
};

export default GestureControl;
