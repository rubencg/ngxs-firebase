import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BudgetStoreAction } from './state/budget-store.actions';
import { BudgetStoreState } from './state/budget-store.state';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-firebase';
  // users$: Observable<User[]>;
  @Select(BudgetStoreState.getUsers) users$: Observable<User[]>;

  constructor(private store: Store, private userService: UsersService){
    this.store.dispatch(new BudgetStoreAction());
  }

  addItem() {
  }
}
