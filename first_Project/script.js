// Navigation link handlers (skip links that have real destinations)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
  if (navLink.getAttribute('href') === '#') {
    navLink.addEventListener('click', function (event) {
      event.preventDefault();
    });
  }
});

// File Upload Handler
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const filePreviewContainer = document.getElementById('file-preview-container');

if (uploadButton && fileInput) {
  uploadButton.addEventListener('click', function () {
    fileInput.click();
  });

  fileInput.addEventListener('change', function (event) {
    const files = Array.from(event.target.files);
    files.forEach(function (file) {
      createFileChip(file);
    });
  });
}

function createFileChip(file) {
  if (!filePreviewContainer) return;

  const chip = document.createElement('div');
  chip.className = 'file-chip';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'file-chip__name';
  nameSpan.textContent = file.name;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'file-chip__remove';
  removeBtn.innerHTML = '&times;';
  removeBtn.setAttribute('aria-label', 'Remove file');

  removeBtn.addEventListener('click', function () {
    chip.remove();
  });

  chip.appendChild(nameSpan);
  chip.appendChild(removeBtn);
  filePreviewContainer.appendChild(chip);
}

// Pac-Man Ghost Typing Animation Handler
const chatInput = document.getElementById('chat-input');
const pacmanIndicator = document.getElementById('pacman-typing-indicator');
let typingTimeout = null;

if (chatInput && pacmanIndicator) {
  chatInput.addEventListener('input', function () {
    if (chatInput.value.length > 0) {
      pacmanIndicator.classList.add('is-typing');
    } else {
      pacmanIndicator.classList.remove('is-typing');
    }

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(function () {
      pacmanIndicator.classList.remove('is-typing');
    }, 1000);
  });

  chatInput.addEventListener('blur', function () {
    pacmanIndicator.classList.remove('is-typing');
  });
}
