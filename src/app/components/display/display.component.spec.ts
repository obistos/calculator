import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive "1"', async () => {
    component.displayValue = '1';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-1').textContent).toContain('1');
  });

  it('should receive "2"', () => {
    component.displayValue = '2';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-2').textContent).toContain('2');
  });

  it('should receive "3"', () => {
    component.displayValue = '3';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-3').textContent).toContain('3');
  });

  it('should receive "4"', () => {
    component.displayValue = '4';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-4').textContent).toContain('4');
  });


  it('should receive "5"', () => {
    component.displayValue = '5';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-5').textContent).toContain('5');
  });


  it('should receive "6"', () => {
    component.displayValue = '6';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-6').textContent).toContain('6');
  });


  it('should receive "7"', () => {
    component.displayValue = '7';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-7').textContent).toContain('7');
  });


  it('should receive "8"', () => {
    component.displayValue = '8';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-8').textContent).toContain('8');
  });


  it('should receive "9"', () => {
    component.displayValue = '9';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-9').textContent).toContain('9');
  });

  it('should receive "0"', () => {
    component.displayValue = '0';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.number-0').textContent).toContain('0');
  });


  it('should receive "asdsd"', () => {
    component.displayValue = 'asdsd';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.display-screen').textContent).toEqual('');
  });


  it('should receive "null"', () => {
    component.displayValue = '';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.display-screen').textContent).toEqual('');
  });

  it('should receive "undefined"', () => {
    component.displayValue = '';
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.display-screen').textContent).toEqual('');
  });

  it('should receive "."', () => {
    component.displayValue = '.';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.symbol-.').textContent).toEqual('.');
  });

  it('should receive "*"', () => {
    component.displayValue = '*';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.symbol-*').textContent).toEqual('*');
  });

  it('should receive "/"', () => {
    component.displayValue = '/';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.symbol-/').textContent).toEqual('/');
  });

  it('should receive "+"', () => {
    component.displayValue = '+';
    component.validateInput();
    fixture.detectChanges();
    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    expect(numberButtonNativeElement.querySelector('.symbol-+').textContent).toEqual('+');
  });
});