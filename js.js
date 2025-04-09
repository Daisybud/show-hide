function toggleDoor(door) {
  const isOpen = door.classList.contains("open");
  const container = document.querySelector(".door-container");

 
  document.querySelectorAll(".door").forEach(d => d.classList.remove("open"));
  container.classList.remove("expanding");

  
  if (!isOpen) {
    door.classList.add("open");
    container.classList.add("expanding");
  }
} 