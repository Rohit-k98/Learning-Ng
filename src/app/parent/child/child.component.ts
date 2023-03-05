import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() input1!: String;
  @Output() output1 = new EventEmitter<string>();

  response1 = ''
  constructor(private sonDad: FormBuilder) {

  }

  beteBaap = this.sonDad.group({
    jawab: ['']
  })

  toParent(value: any) {
    this.response1 = value.jawab;
    this.output1.emit(this.response1);
    console.log(value.jawab)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Onchanges of Child :", changes)
    // console.log(this.input1)
    // console.log(changes.input1?.previousValue)
  }
  ngOnInit(): void {
    // console.log("ngOnInit")
  }
  ngDoCheck(): void {
    // console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit")

  }
  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked")

  }
  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit")

  }
  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked")

  }
  ngOnDestroy(): void {
    // console.log("ngOnDestroy")

  }

}
