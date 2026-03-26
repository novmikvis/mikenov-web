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


});
