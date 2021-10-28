import React from "react";
import { ActionButtons } from "./ActionButtons";

export const Account = (props) => {
    const {type, accountNumber, balance, fullname} = props;
    
    return (
      <div className="account">
          <div className="details">
              <AccountHolder fullname={fullname} />
              <AccountType type={type} />
              <AccountNumber accountNumber={accountNumber} />
              <ActionButtons />
          </div>
          <AccountBalance balance={formatNumber(balance)} />
      </div>
    )
  }
  
export const AccountHolder = (props) => {
    return (
      <h1>{props.fullname}</h1>
    )
  }
  
  
export const AccountType = (props) => {
    return (
      <h3>{props.type}</h3>
    )
  }
  
  
export const AccountNumber = (props) => {
    return (
      <div>{props.accountNumber}</div>
    )
  }
  
  
export const AccountBalance = (props) => {
    const balance = props.balance;
    return (
      <div className="balance">{balance}</div>
    )
  }

function formatNumber(number) 
{
    return number.toLocaleString(undefined, {maximumFractionDigits: 2});
}
