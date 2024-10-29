let currentStep = 0;

        function nextStep() {
            const steps = document.querySelectorAll('.form-step');
            steps[currentStep].classList.remove('active');
            currentStep++;
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
            }
        }
        function showPaymentMethod() {
            document.getElementById('shipping-step').classList.remove('active');
            document.getElementById('payment-step').classList.add('active');
        }
        function showCardFields() {
            document.getElementById('cardFields').style.display = 'block';
            document.getElementById('UPIFields').style.display = 'none';
        }
        
        function showUPIFields() {
            document.getElementById('cardFields').style.display = 'none';
            document.getElementById('UPIFields').style.display = 'block';
        }
