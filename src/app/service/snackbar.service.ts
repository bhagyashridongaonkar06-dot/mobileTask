import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackbar : MatSnackBar) { }

  successMessage(msg : string){
    this._snackbar.open(msg, 'close',{
      duration : 3000,
      horizontalPosition : 'right',
      verticalPosition : 'top'
    })
  }

  errorMessage(msg : string){
    this._snackbar.open(msg, 'close',{
      duration : 3000,
      horizontalPosition : 'right',
      verticalPosition : 'top'
    })
  }

}
