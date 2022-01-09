import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-generator';

  newMemberName = "";
  members: string[] = [];
  errorMessage = "";

  addMember() {
    if (this.newMemberName && this.newMemberName !== '') {
      this.members.push(this.newMemberName);
      this.newMemberName = ""
      this.errorMessage = ""
    } else {
      this.errorMessage = "Name can't be empty"
    }

  }

  onInput(member: string) {
    this.newMemberName = member;
  }
}
