var course={
	name:"WIN",
   teachers:["George","Zach","kaley"],
   awesome:true,
   director:{
   	name:"Pasha",
   	company :"Carolina Fintech Hub"
   },
   
students:[
{
	name:"Carlton",
	computer: {
		os:"Windows",
		type:"laptop",
	}
},
{
	name:"Hector",
	computer:{
		os:"MACos",
		type:"Macbook",
	}
},
{
	name:"Yami",
	computer:{
		  os:"Windows",
		  type:"laptop",
	}
},
{
	name:"Nicolas",
	computer:{
		os:"Windows",
		type:"laptop",

	}
}
],
preReqs:{
	skills:['ability to learn','hard worker'],
	equipment: {
		laptop: 'true',
		osoptions:["Windows","Macbook"]
	}
}
};
console.log("A1:"+course.name);
console.log("A2:"+course.teachers[1]);
console.log("A3:"+course.students[0].name);

for (var i = 0; i < course.students.length; i++){ 
	if
	(course.students[i].name=="Yami")
	{console.log("A4"+course.students[i].computer.type);}
}

console.log(course.preReqs.equipment);
console.log("A6:"+course.preReqs.equipment.osoptions[1]);

var osoptions=
course.preReqs.equipment.osoptions.join(' or ');
console.log("A7:"+ osoptions);

var WindowsUsers=[]
for (var i = 0; i < course.students.length; i++) {
	if (course.students[i].computer.os=="Windows")  
		{WindowsUsers.push(computer.students[i].name);
	}
}
console.log(WindowsUsers);







