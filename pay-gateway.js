document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const accountNumber = document.getElementById('account-number').value;
    const ifscCode = document.getElementById('ifsc-code').value;
    const accountHolderName = document.getElementById('account-holder-name').value;
    const branchName = document.getElementById('branch-name').value;

    // Basic validation (just an alert for demonstration)
    if (accountNumber && ifscCode && accountHolderName && branchName) {
        alert('Transfer details submitted!');
    } else {
        alert('Please fill in all the details.');
    }
});