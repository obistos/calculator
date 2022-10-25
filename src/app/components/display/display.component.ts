import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  displayValue = '';
  result = '';
  historic: object[] = [];

  add(value: string): void {
    this.displayValue += value;
  }

  equal(): void {
    try {
      this.result = (eval(this.displayValue)).toString();
      if (this.result === 'Infinity') {
        this.displayValue = 'The results are invalid';
      } else {
        this.historic.push({count: this.displayValue, result: this.result});
        this.displayValue = this.result;
      }
    } catch (error: any) {
      this.clean();
      alert('Error: ' + error.message);
    }
  }

  clean(): void {
    this.displayValue = '';
  }

  erase(): void{
    this.displayValue = this.displayValue.slice(0, -1);
  }
  constructor(private modalService: NgbModal) {}

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'calculator-history'});
  }

  validateInput() {
    const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-', '+', '/', '.'];
    if (validInputs.findIndex(item => item === this.displayValue) !== -1) {
      this.displayValue = this.displayValue;
    } else {
      this.displayValue = '';
    }
  }

  ngOnInit(): void {
  }

}