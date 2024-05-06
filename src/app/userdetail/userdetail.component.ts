import { Component, Input, inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {

@Input() user !: User;
}
