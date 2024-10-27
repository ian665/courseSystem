document.addEventListener("DOMContentLoaded", function () {
  let selectedAccount = 'Student';
  const loginForm = document.getElementById("loginForm");
  const teacherAccount = document.getElementById("teacher-account");
  const studentAccount = document.getElementById("student-account");

  // �w�w�ʵe�ͦ�
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 40 + 20;
    const color = getRandomColor();
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.backgroundColor = color;

    document.body.appendChild(bubble);

    const animationDuration = Math.random() * 6 + 4;
    bubble.style.animationDuration = animationDuration + 's';

    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // �C��ͦ��@�Ӫw�w
  setInterval(createBubble, 1000);

  // �B�z�b���������
  teacherAccount.addEventListener("click", function () {
    selectedAccount = 'Teacher';
    teacherAccount.classList.add("selected");
    studentAccount.classList.remove("selected");
  });

  studentAccount.addEventListener("click", function () {
    selectedAccount = 'Student';
    studentAccount.classList.add("selected");
    teacherAccount.classList.remove("selected");
  });

  // �B�z�n�J
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(`Loggin in as ${selectedAccount}`);
    window.location.href = '/home'; // �����ɯ�� "/home" ����
  });
});
