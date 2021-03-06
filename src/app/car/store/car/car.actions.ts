import { Action } from '@ngrx/store';
import { Car } from '../../../core/store/models/car.model';
import { Travel } from '../../../core/store/models/travel.model';
import { Indicator } from '../models/indicator.model';

export enum CarActionTypes {
  LoadCar = '[Car] Load Car',
  LoadCarOK = '[Car] Load Car OK',
  LoadCarError = '[Car] Load Car Error',
  LoadTravel = '[Travel] Load Travel',
  LoadTravelOK = '[Travel] Load Travel OK',
  LoadTravelError = '[Travel] Load Travel Error',
  InsertTravel = '[Travel] Insert Travel',
  InsertTravelOK = '[Travel] Insert Travel OK',
  InsertTravelError = '[Travel] Insert Travel Error',
  UpdateTravel = '[Travel] Update Travel',
  UpdateTravelOK = '[Travel] Update Travel OK',
  UpdateTravelError = '[Travel] Update Travel Error',
  DeleteTravel = '[Travel] Delete Travel',
  DeleteTravelOK = '[Travel] Delete Travel OK',
  DeleteTravelError = '[Travel] Delete Travel Error',
  Brake = '[Engine] Brake',
  Throttle = '[Engine] Throttle',
  Recharge = '[Engine] Recharge',
  UpdateIndicators = '[Display] Update Indicators'
}

export class LoadCar implements Action {
  readonly type = CarActionTypes.LoadCar;
  constructor(public payload: string) {}
}

export class LoadCarOK implements Action {
  readonly type = CarActionTypes.LoadCarOK;
  constructor(public payload: Car) {}
}

export class LoadCarError implements Action {
  readonly type = CarActionTypes.LoadCarError;
  constructor(public payload: string) {}
}

export class LoadTravel implements Action {
  readonly type = CarActionTypes.LoadTravel;
  constructor(public payload: Car) {}
}

export class LoadTravelOK implements Action {
  readonly type = CarActionTypes.LoadTravelOK;
  constructor(public payload: Travel) {}
}

export class LoadTravelError implements Action {
  readonly type = CarActionTypes.LoadTravelError;
  constructor(public payload: string) {}
}

export class InsertTravel implements Action {
  readonly type = CarActionTypes.InsertTravel;
  constructor(public payload: Car) {}
}

export class InsertTravelOK implements Action {
  readonly type = CarActionTypes.InsertTravelOK;
  constructor(public payload: Travel) {}
}

export class InsertTravelError implements Action {
  readonly type = CarActionTypes.InsertTravelError;
  constructor(public payload: string) {}
}

export class UpdateTravel implements Action {
  readonly type = CarActionTypes.UpdateTravel;
  constructor(public payload: Car) {}
}

export class UpdateTravelOK implements Action {
  readonly type = CarActionTypes.UpdateTravelOK;
  constructor(public payload: Travel) {}
}

export class UpdateTravelError implements Action {
  readonly type = CarActionTypes.UpdateTravelError;
  constructor(public payload: string) {}
}

export class DeleteTravel implements Action {
  readonly type = CarActionTypes.DeleteTravel;
  constructor(public payload: Car) {}
}

export class DeleteTravelOK implements Action {
  readonly type = CarActionTypes.DeleteTravelOK;
  constructor() {}
}

export class DeleteTravelError implements Action {
  readonly type = CarActionTypes.DeleteTravelError;
  constructor(public payload: string) {}
}

export class Brake implements Action {
  readonly type = CarActionTypes.Brake;
  constructor(public payload: Car) {}
}

export class Throttle implements Action {
  readonly type = CarActionTypes.Throttle;
  constructor(public payload: Car) {}
}

export class Recharge implements Action {
  readonly type = CarActionTypes.Recharge;
  constructor(public payload: Car) {}
}

export class UpdateIndicators implements Action {
  readonly type = CarActionTypes.UpdateIndicators;
  constructor(public payload: Indicator[]) {}
}

export type CarActions =
  | LoadCar
  | LoadCarOK
  | LoadCarError
  | LoadTravel
  | LoadTravelOK
  | LoadTravelError
  | InsertTravel
  | InsertTravelOK
  | InsertTravelError
  | UpdateTravel
  | UpdateTravelOK
  | UpdateTravelError
  | DeleteTravel
  | DeleteTravelOK
  | DeleteTravelError
  | Brake
  | Throttle
  | Recharge
  | UpdateIndicators;
