import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OnExit} from '../../../guards/administration.guard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnExit {
  public productForm: FormGroup = new FormGroup({
    productName: new FormControl(''),
    quantity: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHomepage() {
    this.router.navigate(['/home']);
  }

  onExit(): boolean {
    if(this.productForm.dirty) {
      return confirm("¿Are you sure you want to go out? form is still being edited");
    }

    return true;
  }
}
