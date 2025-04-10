// Wallet Connection
document.getElementById('connect-wallet').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      alert('Wallet connected!');
    } catch (error) {
      console.error('User rejected wallet connection.');
    }
  } else {
    alert('Please install MetaMask!');
  }
});

// Modal Toggle
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');

document.getElementById('login-btn').addEventListener('click', () => {
  loginModal.style.display = 'block';
});

document.getElementById('signup-link').addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
});

document.querySelectorAll('.close').forEach((btn) => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal || e.target === signupModal) {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  }
});

// 3D Coin Animation with Three.js
function init3DCoin() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const canvas = document.getElementById('coin-canvas');
  canvas.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const geometry = new THREE.CylinderGeometry(50, 50, 10, 64);
  const material = new THREE.MeshStandardMaterial({ color: 0xffd700 });
  const coin = new THREE.Mesh(geometry, material);
  coin.rotation.x = Math.PI / 2;
  scene.add(coin);

  camera.position.z = 200;

  function animate() {
    requestAnimationFrame(animate);
    coin.rotation.y += 0.01;
    coin.rotation.x += 0.005;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize 3D
init3DCoin();
const geometry = new THREE.CylinderGeometry(50, 50, 10, 64);
const coin = new THREE.Mesh(geometry, material);
coin.rotation.x = Math.PI / 2;
scene.add(coin);

camera.position.z = 300;

// Smooth scroll for Early Bird link (if you use in-page anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith("#") && document.querySelector(targetId)) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Animate Early Bird section when in view
function revealOnScroll() {
  const section = document.querySelector('.earlybird');
  const sectionPos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    section.classList.add('show');
  }
}

window.addEventListener('scroll', revealOnScroll);

Add script.js
