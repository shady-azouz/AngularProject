import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('name') inputName: any;
  userName: string = "";
  inputEmpty = true;

  constructor() {
   }

  ngOnInit(): void {
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName)
      this.inputEmpty = false;
    else 
      this.inputEmpty = true;
  }

  onCreateUser() {
    this.userName = "";
    this.inputName.nativeElement.value = '';
    this.inputEmpty = true;
  }

}
