function investFund(fundName) {
    document.getElementById('fundName').value = fundName;
    window.scrollTo({ top: document.getElementById('invest').offsetTop, behavior: 'smooth' });
  }
  
  function makeInvestment() {
    const fundName = document.getElementById('fundName').value;
    const amount = document.getElementById('investmentAmount').value;
  
    if (fundName === '' || amount === '') {
      alert('Please fill in all fields.');
    } else {
      alert(`You have successfully invested $${amount} in ${fundName}!`);
    }
  }
  