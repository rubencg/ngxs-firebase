import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../user';
import { UsersService } from '../users.service';
import {
  BudgetStoreAction,
  BudgetStoreUsersLoaded,
} from './budget-store.actions';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

export class BudgetStoreStateModel {
  public users: User[] = [];
}

const defaults = {
  users: [],
};

@State<BudgetStoreStateModel>({
  name: 'budgetStore',
  defaults,
})
@Injectable()
export class BudgetStoreState {
  constructor(private userService: UsersService) {}

  @Selector()
  static getUsers(state: BudgetStoreStateModel) {
    return state.users;
  }

  @Action(BudgetStoreAction)
  fetchUsers(ctx: StateContext<BudgetStoreStateModel>) {
    this.userService.getUsers()
      .pipe(
        map((firebaseUser: any[]) =>{
          firebaseUser.forEach(e => {
            delete e.avatarImage;
            delete e.exercises_logs;
            delete e.role;
          });
          return firebaseUser;
        }
      )
    )
    .subscribe(
      (users) => ctx.dispatch(new BudgetStoreUsersLoaded(users))
    );
  }

  @Action(BudgetStoreUsersLoaded)
  usersLoaded(
    ctx: StateContext<BudgetStoreStateModel>,
    action: BudgetStoreUsersLoaded
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      users: action.payload,
    });
  }
}
