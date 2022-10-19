import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallflights',
  templateUrl: './viewallflights.component.html',
  styleUrls: ['./viewallflights.component.css']
})
export class ViewallflightsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewFlights().subscribe(
      (data)=>{
        this.flightData=data
      }
    )
  }

  flightData:any=[]

  ngOnInit(): void {
  }

}
