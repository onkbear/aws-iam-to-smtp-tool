const awsIamToSmtp = require('aws-iam-to-smtp');

const button = document.getElementById('calculate');
button.addEventListener('click', (event) => {
  document.getElementById('smtp-password').value = awsIamToSmtp.calculateKey(
    document.getElementById('key').value,
    document.getElementById('region').value
  );
});
