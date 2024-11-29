import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  handleError(error: any) {
    console.error('An error occurred:', error);
  }
}
