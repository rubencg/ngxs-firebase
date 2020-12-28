import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BudgetStoreAction } from './budget-store.actions';

export class BudgetStoreStateModel {
  public items: string[] = [];
}

const defaults = {
  items: []
};

@State<BudgetStoreStateModel>({
  name: 'budgetStore',
  defaults
})
@Injectable()
export class BudgetStoreState {
  @Action(BudgetStoreAction)
  add({ getState, setState }: StateContext<BudgetStoreStateModel>, { payload }: BudgetStoreAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
