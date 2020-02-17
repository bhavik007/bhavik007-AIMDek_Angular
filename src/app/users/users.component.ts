import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  rowData = [];

  constructor(private http: HttpClient) { }

  gridOptions: {
    defaultColDef: {
        resizable: true
    },
};

columnDefs = [
  {headerName: 'Name', field: 'name', filter: "agTextColumnFilter", sortable: true },
  {headerName: 'Username', field: 'username', filter: "agTextColumnFilter", sortable: true },
  {headerName: 'Email', field: 'email', filter: "agTextColumnFilter", sortable: true},
  {headerName: 'Phone', field: 'phone', filter: "agNumberColumnFilter", sortable: true },
  {headerName: 'Website', field: 'website', filter: "agTextColumnFilter" },
  {headerName: 'Address', field: 'address', filter: "agTextColumnFilter", cellRenderer:function (element) {
    debugger;
    return element.value.street + ', ' + element.value.suite + ', ' + element.value.city + ', ' +element.value.zipcode;
  }},
];

  

  ngOnInit() {
    this.getUserData(); 
  }

  getUserData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.rowData = data;
      },
      error => {
          console.log(error);
      });
  }

}
