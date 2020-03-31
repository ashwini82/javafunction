var billAmount =100.12;
function gratuity(billAmount)
{

return  billAmount*.20
};

console.log(gratuity(billAmount));



 
function totalWithGratuity(amount)
{
 return gratuity(amount) + billAmount;


};




console.log("your total including gratuity is " +totalWithGratuity(billAmount).toFixed(2));
