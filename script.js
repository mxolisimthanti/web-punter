fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const grid = document.getElementById('project-grid');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading projects:', error));
