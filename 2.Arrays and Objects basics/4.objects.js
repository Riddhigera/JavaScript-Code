//const tinderUser=new Object()// singleton object
const tinderUser={}//non-singleton object
console.log(tinderUser);//{}

tinderUser.id="123abc";
tinderUser.name="Sam";
tinderUser.isLoggedIn=false;
console.log(tinderUser);//{ id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Riddhi",
            lastname:"Gera"
        }
    }
}
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Riddhi', lastname: 'Gera' } }

console.log(regularUser.fullname.userfullname.firstname);//Riddhi

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"b"}

const ob3={ob1,ob2};
console.log(ob3);//{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } }

const ob4=Object.assign(ob1,ob2);
console.log(ob4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const ob5=Object.assign({},ob1,ob2)
console.log(ob5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const ob6=Object.assign({},ob1)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(ob6);

const ob7={...ob1,...ob2}
console.log(ob7);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "riddhi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
