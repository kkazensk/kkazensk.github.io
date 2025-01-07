document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  // Open project function for dynamic navigation
  function openProject(projectId) {
    window.location.href = `projects.html#${projectId}`;
  }
  