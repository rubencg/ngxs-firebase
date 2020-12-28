import { User } from "../user";

export class BudgetStoreAction {
  static readonly type = '[BudgetStore] Get Users';
  constructor() { }
}

export class BudgetStoreUsersLoaded {
  static readonly type = '[API] Users Loaded';
  constructor(public payload: User[]) { }
}
