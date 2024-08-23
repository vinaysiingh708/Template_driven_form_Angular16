import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  IsAgreed: boolean = false;

  @ViewChild('registrationForm') form : NgForm;

  firstName : string ='';
  lastName :string= '';
  dob:string='';
  emailAddress:string ='';
  gender :string ='';
  country :string ='';
  city:string ='';
  region:string ='';
  postal:string ='';
  userName:string='';

  defaultGender: string = 'male';
  defaultCountry: string = 'India';

  genders = [
    {id:'check-male',value:'male',display:'Male'},
    {id:'check-female',value:'female',display:'Female'},
    {id:'check-other',value:'other',display:'Prefer not to say'}
  ]

  OnFormSubmitted(){
    console.log(this.form);

    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.address.country);
    // console.log(this.form.value.address.city);

    this.firstName=this.form.value.firstname;
    this.lastName=this.form.value.lastname;
    this.emailAddress=this.form.value.email;
    this.country=this.form.value.address.country;
    this.city=this.form.value.address.city;
    this.region=this.form.value.address.region;
    this.postal=this.form.value.address.postal;
    this.userName=this.form.value.username;
    this.dob=this.form.value.dob;
    this.IsAgreed=this.form.value.agreement;



    this.form.reset();

    this.form.form.patchValue({
        gender:'male',
        address:{
          country:'India'
        }
    })
  }

  GenerateUsername(){

    let username='';

    if(this.form.value.firstname.length >=3){
      username += this.form.value.firstname.slice(0,3);
    }else{
      username += this.form.value.firstname  ;
    }

    if(this.form.value.lastname.length >=3){
      username += this.form.value.lastname.slice(0,3);
    }else{
      username += this.lastName  ;
    }

    let datetime = new Date(this.form.value.dob);
    username += datetime.getFullYear();

    username=username.toLowerCase();
    
    console.log(username);

    //this.form.controls['username'].value=username;
    //this.form.value.username=username;
    //console.log(username);

    // this.form.setValue({
    //   firstname:this.form.value.firstname,
    //   lastname:this.form.value.lastname,
    //   email:this.form.value.email,
    //   phone:this.form.value.phone,
    //   dob:this.form.value.dob,
    //   gender :this.form.value.gender,
    //   username:username,    
    //     address:{
    //       street1:this.form.value.street1,
    //         street2:this.form.value.street2,
    //         country :this.form.value.country,
    //         city:this.form.value.city,
    //         region:this.form.value.region,
    //         postal:this.form.value.postal
    //     }
    // })

    this.form.form.patchValue({
      username:username,
      // address:{
      //   country:'Japan'
      // }  
    })

  }

}
