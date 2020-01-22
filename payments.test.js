describe('Test Payments functions', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    
    it('should create a payment object in createCurPayment()', function(){
        let testPaymentObj = createCurPayment();
        expect(Object.keys(testPaymentObj).length).toEqual(3);
    });

    it('should append one payment to the payment table using submitPaymentInfo()', function(){
        submitPaymentInfo();
        expect(document.querySelector("#paymentTable tbody tr").id).toEqual('payment1');
        expect(document.querySelectorAll("#paymentTable tbody tr td")[0].innerText).toEqual('$100');
        expect(document.querySelectorAll("#paymentTable tbody tr td")[1].innerText).toEqual('$20');
        expect(document.querySelectorAll("#paymentTable tbody tr td")[2].innerText).toEqual('20%');
    });

    it('should update the summary table using updateSummary()', function(){
        submitPaymentInfo();
        billAmtInput.value = 5;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        
        expect(document.querySelectorAll("#summaryTable tbody tr").length).toEqual(1);
        expect(document.querySelectorAll("#summaryTable tbody tr td")[0].innerText).toEqual('$205');
        expect(document.querySelectorAll("#summaryTable tbody tr td")[1].innerText).toEqual('$45');
        expect(document.querySelectorAll("#summaryTable tbody tr td")[2].innerText).toEqual('47%');
        
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});