list.splice(2,2,'rice','beans');
var list=['pop-tarts','Ramen-noodles', 'chips','salsa','coffee'];


[list4]='fair trade coffee';
list.push('fruits-loops');


var cart=[];
cart.push (list.pop('fair trade coffee'));
cart.push(list.shift('pop-tarts'));


while(list.length > 0)
    cart.push(list.pop());


