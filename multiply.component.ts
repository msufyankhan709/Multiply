import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  constructor() { }
  public a:number;
  public b:number;
  public result:number;
  Multiply()
  {
    return this.result=Number.parseInt(this.a.toString()) * Number.parseInt(this.b.toString());
  }
  Clear()
  {
    return this.result=this.a=this.b=0;
  }

  ngOnInit(): void {
  }

}
