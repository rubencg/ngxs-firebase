import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BudgetStoreAction } from './state/budget-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-firebase';

  constructor(private store: Store){
    
  }

  addItem() {
    this.store.dispatch(new BudgetStoreAction("New item " + new Date()));
  }
}
