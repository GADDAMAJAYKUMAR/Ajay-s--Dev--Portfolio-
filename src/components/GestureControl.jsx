import React, { useRef, useEffect } from 'react';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import '@tensorflow/tfjs-backend-webgl';

const GestureControl = () => {
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const lastActionTime = useRef(0);
  const smoothingBuffer = useRef({ thumb: [], index: [] });

  const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

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
          const thumbY = landmarks[4][1];
          const indexY = landmarks[8][1];

          smoothingBuffer.current.thumb.push(thumbY);
          smoothingBuffer.current.index.push(indexY);

          if (smoothingBuffer.current.thumb.length > 5) {
            smoothingBuffer.current.thumb.shift();
            smoothingBuffer.current.index.shift();
          }

          const avgThumbY = getAverage(smoothingBuffer.current.thumb);
          const avgIndexY = getAverage(smoothingBuffer.current.index);

          const diff = avgThumbY - avgIndexY;
          const now = Date.now();

          if (now - lastActionTime.current > 600) {
            if (diff > 40) {
              window.scrollBy({ top: 100, behavior: 'smooth' });
              lastActionTime.current = now;
            } else if (diff < -40) {
              window.scrollBy({ top: -100, behavior: 'smooth' });
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
