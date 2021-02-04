import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private snackbar: MatSnackBar) { }
  showMessage(message, action) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
