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

// ── Login Page ────────────────────────────────────────────────────────────────

var loginForm = document.getElementById('login-form');
var loginError = document.getElementById('login-error');

if (loginForm && loginError) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (!email || !password) {
      loginError.classList.add('visible');
      return;
    }

    // Placeholder — replace with real auth logic
    loginError.classList.remove('visible');
    console.log('Login attempted for:', email);
  });

  // Hide error on input change
  ['login-email', 'login-password'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      loginError.classList.remove('visible');
    });
  });
}

// ── Register Page ─────────────────────────────────────────────────────────────

var passwordInput = document.getElementById('reg-password');
var strengthFill = document.getElementById('strength-fill');
var strengthLabel = document.getElementById('strength-label');

if (passwordInput && strengthFill && strengthLabel) {
  var strengthLevels = [
    { label: '', color: 'transparent', width: '0%' },
    { label: 'Weak', color: '#ff5555', width: '33%' },
    { label: 'Fair', color: '#ffaa33', width: '66%' },
    { label: 'Strong', color: '#44cc77', width: '100%' },
  ];

  function getStrength(pw) {
    if (!pw) return 0;
    var score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw) || /[^a-zA-Z0-9]/.test(pw)) score++;
    return score;
  }

  passwordInput.addEventListener('input', function () {
    var level = strengthLevels[getStrength(this.value)];
    strengthFill.style.width = level.width;
    strengthFill.style.backgroundColor = level.color;
    strengthLabel.textContent = level.label;
    strengthLabel.style.color = level.color;
  });
}

var registerForm = document.getElementById('register-form');
var registerError = document.getElementById('register-error');

if (registerForm && registerError) {
  function showRegisterError(msg) {
    registerError.textContent = msg;
    registerError.classList.add('visible');
  }

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstname = document.getElementById('reg-firstname').value.trim();
    var lastname = document.getElementById('reg-lastname').value.trim();
    var email = document.getElementById('reg-email').value.trim();
    var password = document.getElementById('reg-password').value;
    var confirm = document.getElementById('reg-confirm').value;
    var terms = document.getElementById('reg-terms').checked;

    if (!firstname || !lastname || !email || !password || !confirm) {
      showRegisterError('Please fill in all fields.');
      return;
    }

    if (password !== confirm) {
      showRegisterError('Passwords do not match.');
      document.getElementById('reg-confirm').classList.add('input-error');
      return;
    }

    if (!terms) {
      showRegisterError('You must agree to the Terms of Service.');
      return;
    }

    // Placeholder — replace with real registration logic
    registerError.classList.remove('visible');
    console.log('Register attempted for:', email);
  });

  // Clear errors on input
  ['reg-firstname', 'reg-lastname', 'reg-email', 'reg-password', 'reg-confirm'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      registerError.classList.remove('visible');
      this.classList.remove('input-error');
    });
  });
}
