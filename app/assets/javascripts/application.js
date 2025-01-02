//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  // Force form redirect
  const searchForm = document.querySelector('.homepage-hero__search-group').closest('form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = '/ccs-home/content';
    });
  }
})
