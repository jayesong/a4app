import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  

  constructor() { 
    console.log ('constructor ran...');
  }

  ngOnInit() {
    console.log ('ngOnInit ran...');
    this.name = 'Steve';
    this.age = 13;
    this.address = {
      street:'5 Main St',
      city:'New York',
      state:'NY'
    }
    this.hobbies = ['hello', 'world'];
  }

  onClick(){
    this.name='Meow';
    this.hobbies.push('New one');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

}

interface Address{
  street:string,
  city:string,
  state:string,
}
