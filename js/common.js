function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
  }

  function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
  }
  
  function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
      const currentCaseTotal = getTextElementValueById('case-total');
      const currenSubTotal = currentPhoneTotal + currentCaseTotal;

      setTextElementValueById('sub-total',currenSubTotal);

      //tax calculation
      const taxAmountStirng = (currenSubTotal * 0.1).toFixed(2);
      const taxAmount = parseFloat(taxAmountStirng);
      setTextElementValueById('tax-amount',taxAmount);
      const finalAmount = currenSubTotal + taxAmount;
      setTextElementValueById('final-total',finalAmount);
  }

