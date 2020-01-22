describe('Test helpers functions', function(){
    beforeEach(function(){
        allPayments = {};
        allPayments['payment1'] = {billAmt: "100", tipAmt: "15", tipPercent: 15};
        allPayments['payment2'] = {billAmt: "135", tipAmt: "6.75", tipPercent: 5};
    });

    
    it('should calculate the proper amounts in sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(235);
        expect(sumPaymentTotal('tipAmt')).toEqual(21.75);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    })

    it('should calculate the proper tip percentage in calculateTipPercent()', function(){
        expect(calculateTipPercent(100,10)).toEqual(10);
        expect(calculateTipPercent(100,8.75)).toEqual(9);
        expect(calculateTipPercent(5,10)).toEqual(200);
    })

    afterEach(function(){
        allPayments = {};
    });
});