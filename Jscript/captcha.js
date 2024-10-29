function generateCaptcha() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let captcha = '';
            for (let i = 0; i < 6; i++) {
                captcha += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return captcha;
        }

        function updateCaptcha() {
            const captchaText = generateCaptcha();
            document.getElementById('captchaText').textContent = captchaText;
            return captchaText;
        }
		function myFunction() {
                currentCaptcha = updateCaptcha(); 
				document.getElementById('userInput').value = '';} 
				
        let currentCaptcha = updateCaptcha();

        document.getElementById('captchaForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const userInput = document.getElementById('userInput').value;
			 
            if (userInput === currentCaptcha) {
                	alert('CAPTCHA passed!');
				}
			else {
                	alert('CAPTCHA failed, please try again.');
                currentCaptcha = updateCaptcha(); 
                document.getElementById('userInput').value = '';  
            }
        });