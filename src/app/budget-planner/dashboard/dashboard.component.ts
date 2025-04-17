import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //income
  lastMonthIncome = ['january:$1000','February:$1500','March:$2000'];
  currentMonthIncome = '$2200';

  //expense
  lastMonthExpense = ['january:$700','February:$1100','March:$1300'];
  currentMonthExpense  = '$1700';

  //todo trans
  todoTransaction=[
    {description:'Pay electricity bill'},
    {description:'Submit monthly report'},
    {description:'Buy groceries'},
    {description:'Call insurance company'}
  ];
  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;


  constructor(public router:Router){}
  
  onIncome(){
    this.router.navigate(['/budget-planner/income']);
    }

    onExpense(){
      this.router.navigate(['/budget-planner/expense']);
      }
    onTodo(){
      this.router.navigate(['/budget-planner/todo']);
      }
      get CurrentMonthSavings():number{
        return this.totalCurrentMonthIncome-this.totalCurrentMonthExpense;
      }
}
