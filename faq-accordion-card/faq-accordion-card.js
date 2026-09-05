document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.parentElement;
      const isCurrentlyOpen = currentItem.classList.contains('open');

      // 1. Close all other items (accordion behavior)
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        const btn = item.querySelector('.faq-button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked item if it wasn't already open
      if (!isCurrentlyOpen) {
        currentItem.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});