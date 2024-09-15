// Sign-Up Form Logic
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    if (!terms) {
      alert("You must agree to the terms and conditions");
      return;
    }
  
    // Simulating saving user to localStorage (replace with API call in real-world)
    localStorage.setItem('user', JSON.stringify({ fullName, email, password }));
  
    alert("Signed up successfully!");
    loadProfile(fullName, email);
  });
  
  // Load Profile Information
  function loadProfile(fullName, email) {
    document.getElementById('profileFullName').textContent = fullName;
    document.getElementById('profileEmail').textContent = email;
  }
  
  // Chatbox Functionality
  function sendMessage() {
    const chatInput = document.getElementById('chatInput').value;
    const chatMessages = document.getElementById('chatMessages');
  
    if (chatInput.trim()) {
      const message = document.createElement('p');
      message.textContent = `You: ${chatInput}`;
      chatMessages.appendChild(message);
      document.getElementById('chatInput').value = '';
  
      // Simulate a reply
      setTimeout(() => {
        const reply = document.createElement('p');
        reply.textContent = "Support: How can I assist you?";
        chatMessages.appendChild(reply);
      }, 1000);
    }
  }
  
  // Copy Referral Link
  function copyReferralLink() {
    const referralLink = document.getElementById('referralLink').textContent;
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Referral link copied!");
    });
  }
  
  // Simulate Payment Processing
  /*function makePayment() {
    const paymentAmount = document.getElementById('paymentAmount').value;
    if (paymentAmount > 0) {
      alert(`Payment of $${paymentAmount} successful!`);
    } else {
      alert("Please enter a valid amount.");
    }
  }*/