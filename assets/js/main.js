/**
 * Yang Yue's Projects Showcase - Main JavaScript
 * Handles project filtering functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter__btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get filter value
      const filterValue = button.dataset.filter;

      // Filter projects
      projectCards.forEach(card => {
        const status = card.dataset.status;

        if (filterValue === 'all' || status === filterValue) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Add fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Initial animation for cards on page load
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeIn 0.4s ease ${index * 0.1}s forwards`;
  });
});
