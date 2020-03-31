var slist=['poptarts','Ramen-noodles','chips','salsa','coffee'];
console.log(slist);
slist.push('Fruit-loops');
//slist.splice(4,1 ,'Fair Trade Coffee');
//console.log(slist);
slist[slist.indexOf('coffee')]='Fair Trade Coffee';
slist.splice(2,2,'rice', 'beans');
console.log(slist);
var scart=[];
scart.unshift[slist.pop()];
scart.push[slist.shift()];
console.log(scart);
while(slist.length>0){
scart.push(slist.pop());
}
console.log(scart.sort());
console.log(scart.join(" , "));