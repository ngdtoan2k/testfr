import { Component, inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from "../userdetail/userdetail.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CommonModule, UserdetailComponent]
})
export class UserListComponent {
userService: UserserviceService = inject(UserserviceService);
userlist:User[] =[];

constructor(){
}
ngOnInit() {
  this.userService.getAll()
    .subscribe((data: User[]) => {
      this.userlist = data;
    });
}
}
