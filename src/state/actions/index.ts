import { ActionType } from '../action-types'

interface DepositAction {
  type: ActionType.DEPOSIT
  payload: number
}

interface withDrawAction {
  type: ActionType.WITHDRAW
  payload: number
}

interface BankruptAction {
  type: ActionType.BANKRUPT
}

export type Action = DepositAction | withDrawAction | BankruptAction
