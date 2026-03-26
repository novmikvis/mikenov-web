document.addEventListener('DOMContentLoaded', () => {
  // 3D Parallax Gyro/Mouse Logic for Avatar
  const avatarCircle = document.querySelector('.avatar-circle');
  
  // Mouse tracking (Desktop)
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate values from -1 to 1 based on mouse position relative to center
    const xPos = (clientX / innerWidth) - 0.5;
    const yPos = (clientY / innerHeight) - 0.5;
    
    // Rotate max 30 degrees
    const rotateX = yPos * -30;
    const rotateY = xPos * 30;
    
    avatarCircle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Gyro tracking (Mobile)
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      // e.gamma is left-to-right tilt in degrees (-90 to 90)
      // e.beta is front-to-back tilt in degrees (-180 to 180)
      
      let gamma = e.gamma; 
      let beta = e.beta;
      
      if (gamma === null || beta === null) return;
      
      // constrain to avoid flipping completely
      if (gamma > 45) gamma = 45;
      if (gamma < -45) gamma = -45;
      
      // Neutral position could be ~45deg beta (holding phone up slightly)
      // Normalize it around 45.
      let normalizedBeta = beta - 45;
      if (normalizedBeta > 45) normalizedBeta = 45;
      if (normalizedBeta < -45) normalizedBeta = -45;

      // Map to subtle rotations
      const rotateX = normalizedBeta * -0.6; 
      const rotateY = gamma * 0.6;
      
      avatarCircle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
});
