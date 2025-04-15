import React, { useEffect, useState } from "react";

function Eyes() {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Get the center of the screen
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      // Calculate angle towards the mouse
      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;
      let angle = Math.atan2(deltaY, deltaX);

      // Define movement radii
      let pupilRadius = 20; // For pupil movement
      let irisRadius = 5; // Subtle iris movement

      // Calculate new positions
      let pupilX = pupilRadius * Math.cos(angle);
      let pupilY = pupilRadius * Math.sin(angle);
      let irisX = irisRadius * Math.cos(angle);
      let irisY = irisRadius * Math.sin(angle);

      setPupilPosition({ x: pupilX, y: pupilY });
      setIrisPosition({ x: irisX, y: irisY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className="relative w-full h-2/3 bg-center bg-blue-900">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Eye 1 */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-amber-200">
            <div
              style={{
                transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`,
              }}
              className="relative w-2/3 h-2/3 flex justify-center items-center bg-black rounded-full transition-all duration-200"
            >
              <div
                style={{
                  transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                }}
                className="absolute w-[2vw] h-[2vw] rounded-full bg-white transition-all duration-100"
              ></div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-amber-200">
            <div
              style={{
                transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`,
              }}
              className="relative w-2/3 h-2/3 flex justify-center items-center bg-black rounded-full transition-all duration-200"
            >
              <div
                style={{
                  transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                }}
                className="absolute w-[2vw] h-[2vw] rounded-full bg-white transition-all duration-100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
