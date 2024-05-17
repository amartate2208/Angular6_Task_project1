import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-create',
  templateUrl: './user-profile-create.component.html',
  styleUrls: ['./user-profile-create.component.css']
})
export class UserProfileCreateComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required]],
      bio: [''],
      avatarUrl: ['']
    });
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      // Implement logic to update user profile
      console.log('Updated Profile Data:', this.profileForm.value);
    }
  }
 
  editPhoto(): void {
    // Implement logic to open photo editing dialog
    console.log('Edit Photo clicked');
  }
}
